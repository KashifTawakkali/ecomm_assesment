import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeFromCart } from '../../redux/cartSlice';
import Header from './Header';
import Carousel from './Carousel';

const AddToCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handlePlaceOrder = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false); 
    }, 3000); 
  };

  if (cartItems.length === 0) {
    return <div className="container mx-auto px-8 text-white">Your cart is empty</div>;
  }

  return (
    <>
      <Header />
      <Carousel />
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white text-center mt-6 mb-6">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow rounded overflow-hidden group flex flex-col md:flex-row p-4">
              <div className="md:w-1/3">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-lg text-gray-700">₹{item.price}</p>
                    <p className="text-gray-600 text-sm">x {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-lg text-primary">₹{item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="block w-full py-2 text-center text-white bg-red-600 border border-red-600 rounded hover:bg-transparent hover:text-red-600 transition"
                >
                  Remove from Cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="block w-full py-2 mt-4 text-center text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 bg-opacity-50 bg-gray-800 flex justify-center items-center"
          style={{
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          <div className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg">
            <p className="text-xl font-semibold">Congratulations! Your order has been placed successfully!</p>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

export default AddToCart;
