import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import Header from './Header';

const ProductDetails: React.FC = () => {
  const { state: product } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [largeImage, setLargeImage] = useState(product.images[0]);  
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product details not available</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
        images: product.images,
        description: product.description,
      })
    );
    alert(`${product.title} added to cart!`);
  };

  const handleThumbnailClick = (image: string) => {
    setLargeImage(image);

    setTimeout(() => {
      setLargeImage(product.images[0]); 
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="bg-white text-black container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              className="w-full h-auto rounded-lg"
              src={largeImage}
              alt={product.title}
            />
            <div className="flex gap-2 mt-4">
              {product.images.map((img: string, index: number) => (
                <img
                  key={index}
                  className="w-16 h-16 rounded-lg cursor-pointer border"
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(img)} 
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-700 mt-2">₹{product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>

            <div className="flex items-center gap-4 mt-6">
              <label htmlFor="quantity" className="text-gray-700">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                className="border rounded w-16 text-center text-white"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
