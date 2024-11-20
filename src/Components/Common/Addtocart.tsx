import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeFromCart } from '../../redux/cartSlice';

const AddToCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  if (cartItems.length === 0) {
    return <div className="container mx-auto px-8">Your cart is empty</div>;
  }

  return (
    <div className="container mx-auto px-8">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Your Cart</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded overflow-hidden group flex flex-col">
            <img src={item.images[0]} alt={item.title} className="w-full" />
            <div className="pt-4 pb-3 px-4 flex-grow">
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800">{item.title}</h4>
              <p className="text-xl text-primary font-semibold">₹{item.price}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="block w-full py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
