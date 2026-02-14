interface ImageProps {
  src?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt = '' }) => {
  if (!src) return null;

  return (
    <span className="block my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="rounded-lg w-full h-auto" />
    </span>
  );
};

export default Image;
