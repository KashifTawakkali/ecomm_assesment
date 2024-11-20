/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Shop1Productdetails() {
  const images = [
    "src/assets/products/product1.jpg",
    "src/assets/products/product2.jpg",
    "src/assets/products/product3.jpg",
    "src/assets/products/product4.jpg",
    
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    resetAutoSlide();
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    resetAutoSlide();
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    resetAutoSlide();
  };

  // Auto-slide configuration
  const autoSlideInterval = 15000; // 5 seconds
  let autoSlideTimer: NodeJS.Timeout;

  const startAutoSlide = () => {
    autoSlideTimer = setInterval(nextImage, autoSlideInterval);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  };

  // Start auto-slide when the component mounts
  useEffect(() => {
    startAutoSlide();
    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(autoSlideTimer);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='container bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-8 responsive'>
          <div className='grid grid-cols-1 md:grid-cols-1 gap-6 space-y-1 px-8 py-12'>
            <div className='py-8 p-8 flex justify-center relative'>
              <p className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer text-blue-500" onClick={prevImage}><FaAngleLeft /></p>
              <img
                src={images[selectedImageIndex]}
                alt="product"
                className="w-full transition-transform duration-300 transform scale-100 hover:scale-105"
              />
              <p className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-blue-500" onClick={nextImage}><FaAngleRight /></p>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`product ${index + 1}`}
                    className={`w-36 cursor-pointer ${selectedImageIndex === index ? 'border border-blue-500' : ''}`}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-12 mb-12">
            <h1 className="text-4xl font-semibold mb-2 mt-8  font-sans py-8">Product Name</h1>
            <div className="text-gray-600 mb-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt consequuntur minima deleniti quos quidem ipsa distinctio numquam magni. Quam adipisci, fuga in quas et amet nesciunt facilis quidem hic.
            </div>
            <div className="mb-4">
            <p className="text-xl font-semibold mb-1"> Size: </p>
            <div className=' flex space-x-4 place-content-center font-bold'>
            <button className='text-center text-white bg-rose-600 border border-rose-600  hover:bg-transparent hover:text-rose-600 transition'>S</button>
            <button className='text-center text-white bg-rose-600 border border-rose-600  hover:bg-transparent hover:text-rose-600 transition'>M</button>
            <button className='text-center text-white bg-rose-600 border border-rose-600  hover:bg-transparent hover:text-rose-600 transition'>L</button>
            <button className='text-center text-white bg-rose-600 border border-rose-600  hover:bg-transparent hover:text-rose-600 transition'>XL</button>
            </div>
           
              <p className="text-xl font-semibold mb-1 pt-12"> Price: ₹ 20000</p>
              <p className="text-gray-600 text-xl">In stock</p>
            </div>
            <div className="mb-4">

              <label className="block text-lg font-medium mb-1">Quantity</label>
              <input
                type="number"
                className="w-36 px-2 py-1 border-2 rounded-md border-black"
                defaultValue="1"
              />
            </div>
            <div className='flex space-x-4'>
            <Link to="/buyautomobileshop1product1"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Buy Now
              </Link>

              <Link to="/addtocart"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add To Cart
              </Link>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop1Productdetails;
