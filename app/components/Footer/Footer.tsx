import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-white text-green-800 border-t border-gray-300 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
            <Link href="/#hero" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Home</Link>
            <Link href="/#blog" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Blogs</Link>
            <Link href="/#about" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">About</Link>
            <Link href="/#contact" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Contact</Link>
          </div>

        {/* Center Section */}
        <div className="footer-logo flex items-center">
          <Image
            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-green.svg"
            alt="Logo"
            width={64} // Adjust width as needed
            height={64} // Adjust height as needed
            className="mr-12"
          />
        </div>


        {/* Right Section */}
        <div>
          <span className="text-sm font-light">Love Nature by Ali Hassan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
