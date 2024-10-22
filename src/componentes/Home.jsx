import React from "react";
import Logo from "../assets/img/logo.png";
import MiduGif from "../assets/img/gifMidu.gif"
import TempGif from "../assets/img/giftemplate.gif"

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
  {/* Header */}
  <header className="bg-purple-800 py-5">
    <nav className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <a href="/">
          <img src={Logo} alt="Logo" className="w-40" />
        </a>
      </div>

      {/* Start Button */}
      <div>
        <a
          className="cursor-pointer bg-[#ff7518] rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-[#ff944d] hover:ring-2 hover:ring-[#ff7518] hover:shadow-xl hover:shadow-[#ff944d] focus:ring-[#ff944d] focus:shadow-[#ff7518] px-5 py-2"
          href="/edit"
        >
          Get Started
        </a>
      </div>
    </nav>
  </header>

  {/* Hero Section */}
  <section
    className="bg-cover bg-center py-20"
    style={{
      backgroundImage: "url('/path-to-your-halloween-background.jpg')",
    }}
  >
    <div className="container mx-auto text-center">
      <h2 className="text-5xl text-orange-500 font-bold">
        Edit Your Images with a Halloween Twist
      </h2>
      <p className="mt-4 text-xl">
        Turn your photos into spooky masterpieces this season.
      </p>
      <a
        href="/edit"
        className="mt-6 inline-block bg-orange-500 text-white py-3 px-8 rounded hover:bg-orange-400"
      >
        Start Now
      </a>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-16">
    <div className="container mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-purple-800 p-6 rounded">
          {/* Feature image */}
          <img
            src={MiduGif}
            alt="Filters"
            className="w-full h-[450px] object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-orange-500">Spooky Filters</h4>
          <p className="mt-2">
            Add eerie and mysterious effects with just one click.
          </p>
        </div>
        <div className="bg-purple-800 p-6 rounded">
          {/* Feature image */}
          <img
            src={TempGif}
            alt="Costume Templates"
            className="w-full h-[450px] object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold text-orange-500">
            Halloween Costume Templates
          </h4>
          <p className="mt-2">
            Use our pre-designed costume templates to enhance your photos.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-black py-16 border-t-4 border-orange-500">
    <div className="container mx-auto text-center">
      <h3 className="text-3xl font-bold">Don't Miss Out on the Latest Updates!</h3>
      <p className="mt-4">
        Subscribe to get new spooky effects and costume templates.
      </p>
      <form className="mt-6 flex justify-center">
        <input
          type="email"
          placeholder="Your email"
          className="p-3 rounded-l-md bg-gray-800 text-white border-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-r-md hover:bg-orange-400"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-purple-800 py-8">
    <div className="container mx-auto text-center">
      <div className="flex justify-center items-center space-x-2">
        {/* Footer image */}
        <img src={Logo} alt="Footer Halloween" className="w-40" />
        <p>&copy; 2024 Halloween Image Editor. All rights reserved.</p>
      </div>
      <ul className="flex justify-center space-x-4 mt-4">
        <li>
          <a href="#" className="text-white hover:text-orange-500">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-orange-500">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-orange-500">
            Contact
          </a>
        </li>
      </ul>
      <div className="mt-8 text-sm">
        <p className="text-white">
          Created with ❤️ during the{" "}
          <a
            href="https://midu.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Midudev Hackathon
          </a>{" "}
          and{" "}
          <a
            href="https://cloudinary.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Cloudinary
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
</div>
  );
}

export default Home;
