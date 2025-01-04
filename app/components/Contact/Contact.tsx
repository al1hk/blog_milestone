import React from "react";
import Head from "next/head";
import { Updock } from "next/font/google";
import Link from "next/link";

const QuestionsSection = () => {
  return (
    <>
      {/* Google Font */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Updock&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Section */}
      <div id="contact"
        className="relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/footer-hero-big.jpg')",
        }}
      >
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-gray-800 mb-4 font-body"
        >
          Questions?
        </h2>

        {/* Paragraph */}
        <p
          className="text-4xl text-gray-700 max-w-md font-body"
         
        >
          Whether you’re curious about features, a free trial, or even press, we’re
          here to answer any questions.
        </p>

        {/* Button */}
        <button
          className="mt-6 px-10 text-2xl py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 font-body"
         
        >
          <Link href="/Contact/">
          Let’s  Talk  Now
          </Link>
        </button>
      </div>
    </>
  );
};

export default QuestionsSection;
