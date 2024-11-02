import Image from 'next/image';

const Home = () => {
  // URLs for the static and animated images
  const staticImage = '/me.jpg'; // Replace with the actual path to your static image
  const animatedImage = '/me_animated.png'; // Replace with the actual path to your animated image

  // Event handlers to toggle images

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center gap-16">

      {/* Profile Picture with Hover Transition */}
      <div
        className="relative w-[180px] h-[180px] mb-4 cursor-pointer group rounded-full"
        style={{
          background: 'linear-gradient(to right, #c0b88d 50%, #cfc7a5 50%)'
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
      </div>


      {/* Introduction */}
      <main className="max-w-md animate-fadeIn delay-300">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg">
          I’m Marcelo, currently in my third year as a PhD student at The Ohio State University.
          As part of the W3CIL lab, I focus on exploring innovative aspects of cybersecurity
          and blockchain under the mentorship of{" "}
          <a
            href="https://example.com/dr-carter-yagemann" // Replace with actual URL
            className="text-blue-600 hover:underline"
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
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Harsha Chenji
          </a>. I’m excited to share my work, interests, and journey with you.
        </p>
      </main>

      {/* About Me & Research Interests Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fadeIn delay-500">
        <a
          href="/about"
          className="rounded-full border border-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 text-base sm:text-lg font-medium"
        >
          About Me
        </a>
        <a
          href="/research"
          className="rounded-full border border-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 text-base sm:text-lg font-medium"
        >
          Research Interests
        </a>
      </div>
    </div>
  );
};

export default Home;