import React from "react";

const About = () => {
    return (
        <div id="about" className="flex items-center justify-between px-8 py-16 bg-gray-50">
  {/* Left Content */}
  <div className="max-w-lg">
    <h3 className="text-6xl font-semibold text-black mb-2 font-body">About Us</h3>
    <h2 className="text-4xl font-bold mt-3 text-gray-800 leading-tight mb-4 font-body">
    Helping You Achieve Your Goals with Expertise and Dedication
    </h2>
    <p className="text-black mb-6 font-body text-3xl font-bold">
    We are passionate about providing solutions that empower individuals and businesses to succeed. Whether you're looking for personalized guidance, innovative products, or reliable services, our team is committed to helping you thrive in every aspect. Let's grow together!
    </p>
    <button className="px-6 py-2 border border-gray-800 text-gray-800 font-body text-2xl rounded hover:bg-gray-800 hover:text-white text-body">
      <a href="/About/">
      Find Out More
      </a>
    </button>
  </div>

  {/* Right Image */}
  <div className="flex-shrink-0">
    <img 
      className="w-full max-w-md" 
      src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg" 
      alt="Leaf"
    />
  </div>
</div>

    );
}
export default About