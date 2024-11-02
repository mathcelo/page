import Image from 'next/image';

const Home = () => {
  // URLs for the static and animated images
  const staticImage = '/me.jpg'; // Replace with the actual path to your static image
  const animatedImage = '/me_animated.png'; // Replace with the actual path to your animated image
  const lightningGif = '/lightning.webp'; // Ensure this path is correct

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-center gap-16 bg-gradient-to-b from-slate-900 to-slate-800">

      {/* Profile Picture with Original Styling */}
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
      <main className="max-w-md text-white/90 leading-relaxed tracking-wide animate-fadeIn delay-300">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-200">Welcome!</h1>
        <p className="text-lg">
          I’m <span className="text-cyan-400 font-semibold">Marcelo</span>, currently in my third year as a PhD student at The Ohio State University.
          As part of the W3CIL lab, I focus on exploring innovative aspects of cybersecurity
          and blockchain under the mentorship of{" "}
          <a
            href="https://example.com/dr-carter-yagemann" // Replace with actual URL
            className="text-cyan-400 hover:text-cyan-300 hover:underline hover:underline-offset-2 transition-all duration-300 ease-in-out"
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
            className="text-cyan-400 hover:text-cyan-300 hover:underline hover:underline-offset-2 transition-all duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Harsha Chenji
          </a>.
        </p>
        <p className="text-lg mt-4">
          I’m excited to share my <a href="/about" className="text-cyan-400 hover:text-cyan-300 hover:underline hover:underline-offset-2 transition-all duration-300 ease-in-out">background</a> and <a href="/research" className="text-cyan-400 hover:text-cyan-300 hover:underline hover:underline-offset-2 transition-all duration-300 ease-in-out">research interests</a> with you as I continue on this journey.
        </p>
      </main>
    </div>
  );
};

export default Home;