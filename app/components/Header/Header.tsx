import React from 'react'

function Header() {
  return (
    <div>
      <header id="header" className="bg-black text-white p-4 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo for mobile - shown at top */}
          <div className="mb-4 md:hidden">
            <img id="logo" className='w-16 h-18 md:w-20 md:h-22' src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" alt="Coffee Logo" />
          </div>
          
          {/* Navigation links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
            <a href="/#header" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Home</a>
            <a href="/#blog" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Blogs</a>
            <a href="/#about" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">About</a>
            <a href="/#contact" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Contact</a>
          </div>

          {/* Logo for desktop - centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <img id="logo" className='w-15 h-25' src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" alt="Coffee Logo" />
          </div>
          
          <div className="hidden md:block w-1/3"></div> {/* Spacer for desktop layout */}
        </div>
      </header>
    </div>
  )
}

export default Header
