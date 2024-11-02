import Image from 'next/image';

const Home = () => {
  // URLs for the static and animated images
  const staticImage = '/me.jpg'; // Replace with the actual path to your static image
  const animatedImage = '/me_animated.png'; // Replace with the actual path to your animated image
  const lightningGif = '/lightning.webp'; // Ensure this path is correct

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center gap-16 bg-slate-900">

      {/* Profile Picture with Hover Transition */}
      <div
        className="relative w-[180px] h-[180px] mb-4 group rounded-full"
        style={{
          background: 'linear-gradient(to right, #BCB384 50%, #d3ccad 50%)',
          cursor: 'url(/zenitsu_cur.png), auto' // Custom cursor when hovering
        }}
      >
        {/* Static Image (Zoomed Out) */}
        <Image
          src={staticImage}
          alt="Picture of Marcelo"
          layout="fill"
          objectFit="contain" // Adjust to fit the entire image
          objectPosition="center"
          className="rounded-full shadow-lg border-4 border-gray-300 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
        />

        {/* Animated Image (Appears on Hover) */}
        <Image
          src={animatedImage}
          alt="Animated Picture of Marcelo"
          layout="fill"
          objectFit="cover"
          className="rounded-full shadow-lg border-4 border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
        />

        {/* Lightning Effect Overlay */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${lightningGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      {/* Introduction */}
      <main className="max-w-md animate-fadeIn delay-300 text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg">
          I’m Marcelo, currently in my third year as a PhD student at The Ohio State University.
          As part of the W3CIL lab, I focus on exploring innovative aspects of cybersecurity
          and blockchain under the mentorship of{" "}
          <a
            href="https://example.com/dr-carter-yagemann" // Replace with actual URL
            className="text-cyan-400 hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Carter Yagemann
          </a>.
        </p>
        <p className="text-lg mt-4">
          In 2022, I earned my bachelor's degree at Ohio University, where I had the privilege
          of working under the guidance of{" "}
          <a
            href="https://example.com/dr-harsha-chenji" // Replace with actual URL
            className="text-cyan-400 hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Harsha Chenji
          </a>. I’m excited to share my work, interests, and journey with you.
        </p>
      </main>

      {/* Uniform Width Buttons with Rounded Edges */}
      <div className="flex gap-4 mt-8 animate-fadeIn delay-500">
        <a
          href="/about"
          className="rounded-full bg-gray-700 text-gray-200 py-2 px-6 text-base sm:text-lg font-medium hover:bg-gray-600 transition-all duration-300 ease-in-out min-w-[150px] text-center"
        >
          About Me
        </a>
        <a
          href="/research"
          className="rounded-full bg-gray-700 text-gray-200 py-2 px-6 text-base sm:text-lg font-medium hover:bg-gray-600 transition-all duration-300 ease-in-out min-w-[150px] text-center"
        >
          Research Interests
        </a>
      </div>
    </div>
  );
};

export default Home;