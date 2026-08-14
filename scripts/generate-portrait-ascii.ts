/**
 * Regenerates src/content/portrait-ascii.ts from the hero portrait.
 *
 * Run after replacing public/portrait.webp:
 *   pnpm generate-portrait-ascii
 */
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const SOURCE = 'public/portrait.webp';
const TARGET = 'src/content/portrait-ascii.ts';

const COLUMNS = 60;
const ROWS = 36;
const RAMP = ' .:-=+*#%@';
const ALPHA_FLOOR = 0.35;
const GAMMA = 1.4;

/**
 * The illustration's flat under-nose shadow collapses into a solid bar above
 * the mouth at this cell size, so it is repainted as skin before downsampling.
 * The nose outline is a separate, darker colour and survives untouched.
 */
const SHADOW = { red: 167, green: 97, blue: 86 };
const SHADOW_TOLERANCE = 10;
const SKIN = { red: 245, green: 197, blue: 160 };

const isShadow = (red: number, green: number, blue: number): boolean =>
  Math.abs(red - SHADOW.red) <= SHADOW_TOLERANCE &&
  Math.abs(green - SHADOW.green) <= SHADOW_TOLERANCE &&
  Math.abs(blue - SHADOW.blue) <= SHADOW_TOLERANCE;

const luminance = (red: number, green: number, blue: number): number =>
  (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

async function repaintShadow(): Promise<sharp.Sharp> {
  const { data, info } = await sharp(SOURCE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let offset = 0; offset < data.length; offset += info.channels) {
    const alpha = data[offset + 3] ?? 0;
    const red = data[offset] ?? 0;
    const green = data[offset + 1] ?? 0;
    const blue = data[offset + 2] ?? 0;
    if (alpha > 90 && isShadow(red, green, blue)) {
      data[offset] = SKIN.red;
      data[offset + 1] = SKIN.green;
      data[offset + 2] = SKIN.blue;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  });
}

async function buildArt(): Promise<string> {
  const repainted = await repaintShadow();
  const { data, info } = await repainted
    .resize(COLUMNS, ROWS, { fit: 'fill' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cells: { column: number; row: number; light: number }[] = [];
  for (let index = 0; index < info.width * info.height; index += 1) {
    const offset = index * info.channels;
    const alpha = (data[offset + 3] ?? 0) / 255;
    if (alpha < ALPHA_FLOOR) continue;
    cells.push({
      column: index % info.width,
      row: Math.floor(index / info.width),
      light: luminance(data[offset] ?? 0, data[offset + 1] ?? 0, data[offset + 2] ?? 0),
    });
  }

  const lights = cells.map((cell) => cell.light);
  const low = Math.min(...lights);
  const high = Math.max(...lights);

  const grid: string[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLUMNS }, () => ' ')
  );
  for (const cell of cells) {
    const stretched = (cell.light - low) / (high - low);
    const darkness = (1 - stretched) ** GAMMA;
    const step = Math.round(darkness * (RAMP.length - 1));
    grid[cell.row]![cell.column] = RAMP[step] ?? ' ';
  }

  return grid.map((row) => row.join('').replace(/\s+$/, '')).join('\n');
}

async function main(): Promise<void> {
  const art = await buildArt();
  if (art.includes('`') || art.includes('${') || art.includes('\\')) {
    throw new Error('Art contains characters that break a template literal');
  }

  writeFileSync(
    TARGET,
    `/**
 * ASCII rendering of the hero portrait, crossfaded in on hover.
 *
 * Generated from ${SOURCE} at ${COLUMNS}x${ROWS} characters with the ramp
 * "${RAMP}", a min-max luminance stretch and gamma ${GAMMA}. Pixels below
 * ${Math.round(ALPHA_FLOOR * 100)}% alpha become spaces, which preserves the
 * circular silhouette.
 *
 * Do not edit by hand: run \`pnpm generate-portrait-ascii\`.
 */
export const PORTRAIT_ASCII = \`${art}\`;
`
  );
  console.log(`Wrote ${TARGET} (${COLUMNS}x${ROWS})`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
