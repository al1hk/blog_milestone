import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div>
      <header id="header" className="bg-black text-white p-4 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Navigation links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
            <Link href="/#hero" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Home</Link>
            <Link href="/#blog" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Blogs</Link>
            <Link href="/#about" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">About</Link>
            <Link href="/#contact" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Contact</Link>
          </div>

          {/* Logo for desktop - centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <Image
              id="logo"
              className='w-15 h-25'
              src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg"
              alt="Coffee Logo"
              width={60} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>

          <div className="hidden md:block w-1/3"></div> {/* Spacer for desktop layout */}
        </div>
      </header>
    </div>
  )
}

export default Header
