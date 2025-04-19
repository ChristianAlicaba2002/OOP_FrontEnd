import React from 'react';
import Sidebar from '@/app/Application/Components/Sidebar';

const ProductCard = ({ imageUrl, title, description, sizes, price }: { imageUrl: string, title: string, description: string, sizes: string, price: string }) => {
  return (
    <div className="rounded-lg p-8 flex flex-col items-center justify-start relative bg-white w-fit shadow-pink-300 shadow-md">
      <div className="w-32 h-32 rounded-full flex items-center justify-center absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white border-1 border-pink-300 shadow-pink-400 shadow">
        <div
          className="w-full h-full rounded-full overflow-hidden p-1"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className='mt-20 text-center'>
        <h2 className="text-xl font-semibold text-pink-700">{title}</h2>
        <p className="text-lg text-pink-500">{description}</p>
        <p className='text-lg text-gray-500'>{sizes}</p>
        <p className="text-2xl font-bold mt-3 text-pink-700">{price}</p>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex bg-white">
      <aside>
        <Sidebar />
      </aside>

      <div className="flex-grow bg-white">
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#F77062]/40 to-[#FE5196]/90 text-white shadow-md py-2 px-0 w-[70%] mx-auto flex justify-around items-center text-xl font-bold rounded-b-3xl shadow-pink-300">
          <a href="#icecream" className="hover:scale-110 transition-transform flex flex-col items-center gap-2">
            <img src="/img/shaved-icee.png" alt="Ice Scramble" className="w-12 h-12 object-contain" />
            <span className="font-playfair text-lg">Scramble</span>
          </a>
          <a href="#shakes" className="hover:scale-110 transition-transform flex flex-col items-center gap-2">
            <img src="/img/shake.png" alt="Shakes" className="w-12 h-12 object-contain" />
            <span className="font-playfair text-lg">Shakes</span>
          </a>
          <a href="#drinks" className="hover:scale-110 transition-transform flex flex-col items-center gap-2">
            <img src="/img/drink.png" alt="Drinks" className="w-12 h-12 object-contain" />
            <span className="font-playfair text-lg">Drinks</span>
          </a>
          <a href="#bites" className="hover:scale-110 transition-transform flex flex-col items-center gap-2">
            <img src="/img/bites.png" alt="Bites" className="w-12 h-12 object-contain" />
            <span className="font-playfair text-lg">Bites</span>
          </a>
        </nav>

        <div className="text-center py-40 px-8 ">
          <h1 className="text-center text-7xl font-playfair font-black bg-gradient-to-br from-[#F77062] to-[#FE5196] text-transparent bg-clip-text shadow-pink-800">
          ⋆꙳•̩̩͙❅*̩̩͙‧͙ Sweet Delights ‧͙*̩̩͙❆ ͙͛ ˚₊⋆
          </h1>
          <p className="mt-8 text-xl text-pink-600">
            Indulge in our delightful selection of frozen treats, rich shakes, refreshing drinks, and sweet bites!
          </p>
        </div>

        <section id="icecream" className="py-40 px-8">
          <h2 className="text-6xl font-playfair font-bold mb-12 text-center text-pink-700 ">Ice Scramble ❄༄.°</h2>
          <main className="mx-auto w-[95%] flex flex-wrap justify-center gap-20 ">
            <ProductCard imageUrl='/img/Strawberry.png' title="Strawberry Swirl" description="Fresh strawberry." sizes="Small, Medium, Large" price="₱35.00" />
            <ProductCard imageUrl='/img/Pandan.png' title="Pandan Cutie" description="Panda for you." sizes="Small, Medium, Large" price="₱35.00" />
            <ProductCard imageUrl='/img/Mango.png' title="Mango Day" description="Fresh so much mangoes." sizes="Small, Medium, Large" price="₱35.00" />
            <ProductCard imageUrl='/img/Ube.png' title="UbeLicious" description="Ube lasap sarap." sizes="Small, Medium, Large" price="₱35.00" />
            <ProductCard imageUrl='/img/Chocolate.png' title="Choco Forever" description="Rich chocolate." sizes="Small, Medium, Large" price="₱40.00" />
          </main>
        </section>

        <section id="shakes" className="py-40 px-8">
          <h2 className="text-6xl font-playfair font-bold mb-12 text-center text-pink-700">Shakes ❄༄.°</h2>
          <main className="mx-auto w-[95%] flex flex-wrap justify-center gap-20">
            <ProductCard imageUrl='/img/MangoGraham.png' title="Classic Mango Graham" description="Fresh start with graham" sizes="Small, Medium, Large" price="₱40.00" />
            <ProductCard imageUrl='/img/AvocadoOreo.png' title="Avocado Oreo" description="Smooth avocado with oreos on top." sizes="Small, Medium, Large" price="₱50.00" />
            <ProductCard imageUrl='/img/MangoShake.png' title="Extra Mango" description="Drowned with fresh mangoes." sizes="Small, Medium, Large" price="₱60.00" />
          </main>
        </section>

        <section id="drinks" className="py-40 px-8">
          <h2 className="text-6xl font-playfair font-bold mb-12 text-center text-pink-700">Refreshing Drinks ❄༄.°</h2>
          <main className="mx-auto w-[95%] flex flex-wrap justify-center gap-20">
            <ProductCard imageUrl='/img/Drinks.png' title="Assorted Soda Pop" description="Guess which soda youll receive today?." sizes="Small, Medium, Large" price="₱60.00" />
          </main>
        </section>

        <section id="bites" className="py-24 px-8">
          <h2 className="text-6xl font-playfair font-bold mb-12 text-center text-pink-700">Sweet Bites ❄༄.°</h2>
          <main className="mx-auto w-[95%] flex flex-wrap justify-center gap-20">
            <ProductCard imageUrl='/img/OreoGrahamBar.png' title="Oreo Graham Bar" description="Sweet Fat Oreo Bar!." sizes="Small, Medium, Large" price="₱60.00" />
          </main>
        </section>
      </div>
    </div>
  );
};

export default Menu;