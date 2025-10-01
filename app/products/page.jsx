import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import ProductHorizontalCard from '@/components/ui/ProductHorizontalCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 bg-cover bg-center h-[60vh] flex items-center justify-center " style={{ backgroundImage: "url('/placeholder-leaves.png')" }}>
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative z-10 px-4">
          <p className="text-lg md:text-3xl text-gray-700 mb-2">From Plantation to You</p>
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 leading-tight">
            Pure, Authentic, Responsible
          </h1>
          {/* Green leaf elements as decorations - you'd use actual image assets here */}
         <div className="relative w-full h-full">
  <div
    className="absolute top-4 left-4"
    style={{ transform: `rotate(${Math.floor(Math.random() * 360)}deg)` }}
  >
    <Image src="/images/leaf.png" alt="Leaf" width={30} height={30} />
  </div>

  <div
    className="absolute top-10 right-8"
    style={{ transform: `rotate(${Math.floor(Math.random() * 360)}deg)` }}
  >
    <Image src="/images/leaf.png" alt="Leaf" width={90} height={90} />
  </div>

  <div
    className="absolute bottom-4 left-1/4"
    style={{ transform: `rotate(${Math.floor(Math.random() * 360)}deg)` }}
  >
    <Image src="/images/leaf.png" alt="Leaf" width={125} height={125} />
  </div>

  <div
    className="absolute bottom-8 right-1/4"
    style={{ transform: `rotate(${Math.floor(Math.random() * 360)}deg)` }}
  >
    <Image src="/images/leaf.png" alt="Leaf" width={185} height={185} />
  </div>
</div>

        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="container mx-auto px-4 pb-20">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
  {/* Card 1 */}
  <div className="relative rounded-3xl overflow-hidden shadow-lg h-170 md:h-170">
    <Image
      src="/images/Chille.png"
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

  {/* Card 2 (tall middle one) */}
  <div className="relative rounded-3xl overflow-hidden shadow-lg h-200 md:h-200">
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

  {/* Card 3 */}
  <div className="relative rounded-3xl overflow-hidden shadow-lg h-170 md:h-170">
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
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L10.586 14a1 1 0 001.414 0l3.293-3.293a1 1 0 00-1.414-1.414L11 11.586V7a1 1 0 10-2 0v4.586L8.707 9.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
</div>

      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center flex justify-around items-center">
          <div>
            <p className="text-8xl font-bold text-black">95K</p>
            <p className="text-gray-600 mt-2 text-2xl">Investments</p>
          </div>
          <div>
            <p className="text-8xl font-bold text-black">5K</p>
            <p className="text-gray-600 mt-2 text-2xl">Paid profits</p>
          </div>
        </div>
      </section>

      <hr className='my-10 border-2 border-green-500 w-2/3 mx-auto'/>
      {/* Featured Products with Details */}
      <section className="container mx-auto px-4 py-16">
        {/* Scotch Bonnet */}
        <ProductHorizontalCard title={"Agarwood"} desc={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              subtitle={"Nature’s rare luxury"} image={"/images/vanila_flower.png"} />

        {/* Agarwood */}
        <ProductHorizontalCard title={"Agarwood"} desc={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              subtitle={"Nature’s rare luxury"} image={"/images/vanila_flower.png"} side={"flex-row-reverse"} />
        
        <ProductHorizontalCard title={"Agarwood"} desc={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              subtitle={"Nature’s rare luxury"} image={"/images/vanila_flower.png"} />
      </section>

      {/* More Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-[70vh]">
            <Image
              src="/images/agarwood.png"
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

          <div className="relative rounded-lg overflow-hidden shadow-lg h-[70vh]">
            <Image
              src="/images/agarwood.png"
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

          <div className="relative rounded-lg overflow-hidden shadow-lg h-[70vh]">
            <Image
              src="/images/agarwood.png"
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
      <Footer />
    </div>
  );
}