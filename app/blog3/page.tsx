"use client"
import React, { useState, ChangeEvent } from "react";
import Image from 'next/image';
import Footer from "../components/Footer/Footer";
import Link from "next/link";

interface Comment {
  username: string;
  comment: string;
}

const Page1: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleAddComment = () => {
    if (username && comment) {
      setComments([...comments, { username, comment }]);
      setUsername("");
      setComment("");
    }
  };

  const handleDeleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="text-black">
      <header id="header" className="bg-black text-white p-4 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo for mobile - shown at top */}
          <div className="mb-4 md:hidden">
             <Image id="logo" className='w-15 h-25' src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" alt="Coffee Logo" width={60} height={90} />
          </div>
          
          {/* Navigation links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
            <Link href="/#hero" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Home</Link>
            <Link href="/#blog" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Blogs</Link>
            <Link href="/#about" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">About</Link>
            <Link href="/#contact" className="hover:text-gray-300 transition duration-300 font-body text-lg md:text-2xl">Contact</Link>
          </div>

          {/* Logo for desktop - centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <Image id="logo" className='w-15 h-25' src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" alt="Coffee Logo" />
          </div>
          
          <div className="hidden md:block w-1/3"></div> {/* Spacer for desktop layout */}
        </div>
      </header>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 mt-7 text-center font-body">
        How to Connect with Nature in Everyday Life
        </h1>
        <div className="w-full max-w-3xl">
          <div className="flex justify-center">
            <Image
              src="/assets/The Secret Life Of The Forest Se 2 Ep 1 03.jpg" // Place an image named 'nature.jpg' in the 'public' folder
              alt="Nature"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="text-3xl mt-5 font-bold font-black font-body">
          <p className="text-gray-600 mb-4">
            Nature has an incredible ability to heal and rejuvenate the human mind and body. From the soothing sound of rustling leaves to the calming embrace of fresh air, spending time outdoors can improve mental clarity, reduce stress, and promote overall well-being. It’s a gentle reminder to slow down and reconnect with the world around us.
          </p>
          <p className="text-gray-600 mb-4">
            The benefits of nature are not just anecdotal; they are backed by science. Numerous studies have shown that spending time in natural environments can lower blood pressure, reduce anxiety, and improve mood. The Japanese practice of "shinrin-yoku," or forest bathing, has gained popularity worldwide for its therapeutic effects. Simply walking in a forest and immersing oneself in the sights, sounds, and smells of nature can have profound health benefits.
          </p>
          <p className="text-gray-600 mb-4">
            One of the most remarkable aspects of nature is its ability to provide a sense of perspective. In the hustle and bustle of modern life, it’s easy to get caught up in the minutiae of daily stressors. However, spending time in nature can remind us of the bigger picture. The vastness of a mountain range, the endless horizon of the ocean, or the intricate beauty of a single flower can all serve as reminders of the world’s grandeur and our place within it.
          </p>
          <p className="text-gray-600 mb-4">
            Nature also fosters creativity and inspiration. Many artists, writers, and thinkers have found solace and inspiration in the natural world. The tranquility and beauty of nature can stimulate the mind and encourage creative thinking. Whether it’s the vibrant colors of a sunset, the rhythmic patterns of waves, or the delicate structure of a leaf, nature’s wonders can spark the imagination and lead to new ideas and perspectives.
          </p>
          <p className="text-gray-600 mb-4">
            Moreover, nature provides a space for physical activity and adventure. Hiking, biking, kayaking, and other outdoor activities not only promote physical health but also offer opportunities for exploration and discovery. The physical challenges and rewards of outdoor activities can build resilience, confidence, and a sense of accomplishment. Additionally, these activities often require mindfulness and presence, allowing individuals to fully engage with their surroundings and experience the moment.
          </p>
          <p className="text-gray-600 mb-4">
            The connection between humans and nature is deeply rooted in our history and culture. For centuries, people have relied on the natural world for sustenance, shelter, and spiritual fulfillment. Indigenous cultures, in particular, have a profound respect and understanding of nature’s rhythms and cycles. By learning from these traditions and cultivating a deeper appreciation for nature, we can foster a more sustainable and harmonious relationship with the environment.
          </p>
          <p className="text-gray-600 mb-4">
            In today’s digital age, it’s more important than ever to make time for nature. The constant barrage of screens and notifications can lead to information overload and mental fatigue. Taking a break from technology and immersing oneself in nature can provide a much-needed reset. Whether it’s a walk in the park, a weekend camping trip, or simply sitting under a tree, spending time in nature can rejuvenate the mind and body.
          </p>
          <p className="text-gray-600 mb-4">
            In conclusion, nature offers a wealth of benefits for our physical, mental, and emotional well-being. It has the power to heal, inspire, and connect us to something greater than ourselves. By making time for nature and embracing its wonders, we can lead healthier, more balanced lives. So, the next time you feel overwhelmed or disconnected, step outside and let nature work its magic.
          </p>
        </div>
        <div className="w-full max-w-3xl mt-8">
          <h2 className="text-4xl font-bold mb-4 font-body">Comments</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={handleUsernameChange}
              className="border border-gray-300 p-2 rounded-lg w-full mb-2 font-body text-xl"
            />
            <textarea
              placeholder="Your Comment"
              value={comment}
              onChange={handleCommentChange}
              className="border border-gray-300 p-2 rounded-lg w-full mb-2 font-body text-xl"
            />
            <button
              onClick={handleAddComment}
              className="bg-yellow-500 font-body text-xl text-white px-4 py-2 rounded-lg"
            >
              Add Comment
            </button>
          </div>
          <div>
            {comments.map((c, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-lg mb-4 ">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold font-body text-3xl">{c.username}</span>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-500 font-body text-xl hover:underline"
                  >
                    Delete
                  </button>
                </div>
                <p className="font-body text-2xl">{c.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page1;