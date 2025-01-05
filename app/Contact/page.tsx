import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Header/>
      {/* Top Banner Section */}
      <div
        className="h-72 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/contact-hero-1.jpg')", // Replace with your banner image path
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-black text-6xl font-bold font-body">Contact Us</h1>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4 mt-8 ">You can find us at</h2>
          <p className="text-black mb-4 text-4xl mt-8 font-bold">Mail: hello@yourdomain.com</p>
          <p className="text-black mb-4 text-4xl mt-8 font-bold">Phone Number: 202-555-0888</p>
          <p className="text-black mb-4 text-4xl mt-8 font-bold">Location: 2260 Hood Avenue, San Diego, 92123</p>
          <div className="flex gap-4 mt-4">

           
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-4 ">Let’s get in touch</h2>
          <form className="space-y-6 text-2xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg"
            ></textarea>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 font-body">
            We are optimists who love to work together
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <Image
                src="/assets/avatar_1.jpg" // Replace with team member images
                alt="Team Member"
                width={300} // Adjust width as needed
                height={300} // Adjust height as needed
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/assets/avatar_2.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/assets/avatar_3.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/assets/avatar_4.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
