import Link from 'next/link';

const BlogMain = () => {
  return (
    <div id="blog" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center font-body">Our Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog 1 */}
          <div className="group">
            <Link href="/blog/">
              <img
                src="/assets/Screenshot+2023-07-27+165928.png" // Replace with your actual image path
                alt="The Healing Power of Nature"
                className="w-full h-64 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
              />
            </Link>
            <Link href="/blog/">
              <h3 className="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                The Healing Power of Nature
              </h3>
            </Link>
          </div>
          {/* Blog 2 */}
          <div className="group">
            <Link href="/blog2/">
              <img
                src="/assets/the_beauty_of_biodiversity-exhibit.jpg"
                alt="Exploring the Wonders of Forest Ecosystems"
                className="w-full h-64 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
              />
            </Link>
            <Link href="/blog2/">
              <h3 className="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                Exploring the Wonders of Forest Ecosystems
              </h3>
            </Link>
          </div>

          {/* Blog 3 */}
          <div className="group">
            <Link href="/blog3/">
              <img
                src="/assets/The Secret Life Of The Forest Se 2 Ep 1 03.jpg"
                alt="How to Connect with Nature in Everyday Life"
                className="w-full h-64 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
              />
            </Link>
            <Link href="/blog3/">
              <h3 className="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                How to Connect with Nature in Everyday Life
              </h3>
            </Link>
          </div>

          {/* Blog 4 */}
          <div className="group">
            <Link href="/blog4/">
              <img
                src="/assets/230727101602-01-crowded-us-national-parks-top.jpg"
                alt="Top 5 Stunning Landscapes Around the World"
                className="w-full h-64 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
              />
            </Link>
            <Link href="/blog4/">
              <h3 className="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                Top 5 Stunning Landscapes Around the World
              </h3>
            </Link>
          </div>

          {/* Blog 5 */}
          <div className="group">
            <Link href="/blog5/">
              <img
                src="/assets/1000_F_573925621_xLok082BkGovS1kMcV48dZlZleyxZhmu.jpg"
                alt="Sustainable Living: Protecting Nature"
                className="w-full h-64 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
              />
            </Link>
            <Link href="/blog5/">
              <h3 className="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                Sustainable Living: Protecting Nature
              </h3>
            </Link>
          </div>

          {/* Blog 6 */}
          <div className="group">
            <Link href="/blog6/">
              <img
                src="/assets/service-1.jpg"
                alt="The Importance of Biodiversity"
                className="w-full h-64 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
              />
            </Link>
            <Link href="/blog6/">
              <h3 className="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                The Importance of Biodiversity
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
