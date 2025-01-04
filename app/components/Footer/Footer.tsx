import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-green-800 border-t border-gray-300 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex space-x-6">
          <a href="/#hero" className="hover:underline font-body text-2xl">Home</a>
          <a href="/#about" className="hover:underline font-body text-2xl">About</a>
          <a href="/#blog" className="hover:underline font-body text-2xl">Blogs</a>
          <a href="/#contact" className="hover:underline font-body text-2xl">Contact</a>
        </div>

        {/* Center Section */}
        <div className="footer-logo flex items-center">
          <img
            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-green.svg"
            alt="Logo"
            className="h-16 mr-12"
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
