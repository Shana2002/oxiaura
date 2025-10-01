
import Navbar from '@/components/common/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-leaves.png')" }}>
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative z-10 px-4">
          <p className="text-lg md:text-xl text-gray-700 mb-2">From Plantation to You</p>
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 leading-tight">
            Pure, Authentic, Responsible
          </h1>
          {/* Green leaf elements as decorations - you'd use actual image assets here */}
          <div className="absolute top-4 left-4">
            <Image src="/placeholder-leaf.png" alt="Leaf" width={30} height={30} />
          </div>
          <div className="absolute top-10 right-8">
            <Image src="/placeholder-leaf.png" alt="Leaf" width={40} height={40} />
          </div>
          <div className="absolute bottom-4 left-1/4">
            <Image src="/placeholder-leaf.png" alt="Leaf" width={25} height={25} />
          </div>
          <div className="absolute bottom-8 right-1/4">
            <Image src="/placeholder-leaf.png" alt="Leaf" width={35} height={35} />
          </div>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
            <Image
              src="/images/scotchbonnet.png"
              alt="Chilli"
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Red Chilli</h3>
              <p className="text-sm">Spicy delight</p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
            <Image
              src="/images/agarwood.png"
              alt="Agarwood"
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Agarwood</h3>
              <p className="text-sm">Exotic fragrance</p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
            <Image
              src="/images/vanila.png"
              alt="Green Bean"
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Green Beans</h3>
              <p className="text-sm">Fresh & Healthy</p>
            </div>
            <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L10.586 14a1 1 0 001.414 0l3.293-3.293a1 1 0 00-1.414-1.414L11 11.586V7a1 1 0 10-2 0v4.586L8.707 9.293z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center flex justify-around items-center">
          <div>
            <p className="text-5xl font-bold text-green-700">95K</p>
            <p className="text-gray-600 mt-2">Investments</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-green-700">5K</p>
            <p className="text-gray-600 mt-2">Paid profits</p>
          </div>
        </div>
      </section>

      {/* Featured Products with Details */}
      <section className="container mx-auto px-4 py-16">
        {/* Scotch Bonnet */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-16">
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder-scotchbonnet.png"
                alt="Scotch Bonnet"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Scotch bonnet</h2>
            <p className="text-green-700 font-semibold mb-2">Hee, that speaks &apos;or itself&apos;</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="#" className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300">
              Read More
            </Link>
          </div>
        </div>

        {/* Agarwood */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between mb-16">
          <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder-agarwood-detail.png"
                alt="Agarwood"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12 text-center md:text-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Agarwood</h2>
            <p className="text-green-700 font-semibold mb-2">Nature&apos;s rare luxury</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link href="#" className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300">
              Read More
            </Link>
          </div>
        </div>

        {/* Vanilla */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-16">
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder-vanilla.png"
                alt="Vanilla"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vanilla</h2>
            <p className="text-green-700 font-semibold mb-2">Sweetness grown the nature way</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Link href="#" className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* More Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
            <Image
              src="/placeholder-durian.png"
              alt="Durian"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Durian</h3>
              <p className="text-sm">The King of Fruits</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-green-500 rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L10.586 14a1 1 0 001.414 0l3.293-3.293a1 1 0 00-1.414-1.414L11 11.586V7a1 1 0 10-2 0v4.586L8.707 9.293z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
            <Image
              src="/placeholder-watermelon.png"
              alt="Watermelon"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Watermelon</h3>
              <p className="text-sm">Summer Refreshment</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-green-500 rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L10.586 14a1 1 0 001.414 0l3.293-3.293a1 1 0 00-1.414-1.414L11 11.586V7a1 1 0 10-2 0v4.586L8.707 9.293z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
            <Image
              src="/placeholder-passionfruit.png"
              alt="Passion Fruit"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Passion Fruit</h3>
              <p className="text-sm">Tropical Zest</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-green-500 rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L10.586 14a1 1 0 001.414 0l3.293-3.293a1 1 0 00-1.414-1.414L11 11.586V7a1 1 0 10-2 0v4.586L8.707 9.293z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-800 text-white py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">OXIAURA</h3>
            <p className="text-sm text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Facebook Icon */}
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.502 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Twitter Icon */}
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.53M16.936 5.86c1.192-.614 2.259-1.218 3.23-1.678-1.071.554-2.148.966-3.262 1.157 1.23-.732 2.193-1.849 2.64-3.197-1.123.666-2.383 1.152-3.692 1.401-1.055-1.121-2.56-1.825-4.225-1.825-3.18 0-5.757 2.577-5.757 5.757 0 .45.038.892.11 1.315-4.787-.24-9.032-2.529-11.87-5.996-.493.847-.777 1.834-.777 2.895 0 1.996 1.016 3.748 2.553 4.779-.94-.03-1.822-.288-2.593-.715v.072c0 2.798 1.989 5.148 4.632 5.682-.48.13-.984.198-1.503.198-.367 0-.723-.035-1.07-.103.738 2.296 2.863 3.961 5.393 4.008-1.977 1.55-4.463 2.473-7.168 2.473-.466 0-.92-.027-1.362-.078 2.552 1.634 5.568 2.592 8.818 2.592" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Instagram Icon */}
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4.5c2.485 0 4.5 2.015 4.5 4.5S14.485 15.5 12 15.5 7.5 13.485 7.5 11s2.015-4.5 4.5-4.5zm0 1.5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm5.5-2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Green Street, City, Country</li>
              <li>+1 (123) 456-7890</li>
              <li>info@oxiaura.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">Stay updated with our latest products and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              />
              <button
                type="submit"
                className="bg-green-600 p-2 rounded-r-md hover:bg-green-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} OXIAURA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}