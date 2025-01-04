import React from "react";
import Image from "next/image";  // Import Image from Next.js
import Link from "next/link";  // Import Link from Next.js
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Image Section */}
      <Header />
      <div
        className="h-72 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/header-hero-1.jpg')", // Replace with your top banner image path
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-black text-8xl font-bold font-body ">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-4xl font-body">
          We’re a highly collaborative and supportive team,
          <br /> coming together on
          every project to ensure
          <br /> our clients get the very best result.
        </p>

        {/* Image Section */}
        <div className="my-12">
          <Image
            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/contact-hero-1024x525.jpg" // Replace with the image path
            alt="Nature"
            width={1024} // Specify the width
            height={525} // Specify the height
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Mission and Values Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-body">Our Mission</h2>
            <p className="text-gray-600 font-body text-3xl">
              Build the best product that creates the most value for our
              customers, use business to inspire and implement environmentally
              friendly solutions.
            </p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-body">Our Values</h2>
            <p className="text-gray-600 text-3xl font-body">
              We strive to go above and beyond for our clients no matter the
              challenge. We aim to deliver our very best work every single day
              across our services.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
