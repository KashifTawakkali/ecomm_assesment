import React, { useState } from 'react'
import { BsFillPersonFill } from 'react-icons/Bs';
import { FaCartPlus, FaHamburger, FaShoppingBag, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Function to trigger the popup
  const showPopupMessage = (e: React.MouseEvent) => {
    e.preventDefault();  
    setShowPopup(true);  
  };

  const closePopup = () => {
    setShowPopup(false);  
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='bg-white top-0' style={{ position: 'sticky', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img src="src/assets/Images/logos.png" alt="Delivery" className="w-[200px] object-cover top-0 start-0" />
            <Link to="/profile">
              <button className="absolute top-2 right-2 flex justify-center items-center shadow-xl bg-gray-100">
                <BsFillPersonFill className="h-8 w-8 text-gray-500" />
              </button>
            </Link>
          </div>
        </div>

        <nav className="bg-slate-800">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="md:hidden absolute right-5">
                <button className="text-black hover:text-red-700 text-2xl px-3 py-2" onClick={toggleMenu}>
                  <HiMenu />
                </button>

                {isMenuOpen && (
                  <div className="absolute mt-2 w-36 bg-white shadow-lg rounded py-2 text-justify pl-4 right-0">
                    <Link to="/" className="text-rose-700 hover:text-rose-700 transition text-xl font-serif underline">Home</Link><br />
                    <a href="#!" onClick={showPopupMessage} className="text-rose-700 hover:text-rose-700 transition text-xl font-serif underline">Shop</a><br />
                    <a href="#!" onClick={showPopupMessage} className="text-rose-700 hover:text-rose-700 transition text-xl font-serif underline">About us</a><br />
                    <a href="#!" onClick={showPopupMessage} className="text-rose-700 hover:text-rose-700 transition text-xl font-serif underline">Contact us</a><br />
                    <Link to="/addtocart" className="text-rose-700 hover:text-rose-700 transition text-xl font-serif underline">Cart</Link><br />
                    <Link to="/myorders" className="text-rose-700 hover:text-rose-700 transition text-xl font-serif underline">My Orders</Link><br />
                    <a href="#!" onClick={showPopupMessage} className="text-rose-700 hover:text-rose-700 transition text-xl font-serif underline">Login</a>
                  </div>
                )}
              </div>

              <div className="hidden md:block">
                <div className="flex items-center space-x-6 capitalize">
                  <Link to="/" className="text-white hover:text-white transition text-xl font-serif">Home</Link>
                  <a href="#!" onClick={showPopupMessage} className="text-white hover:text-white transition text-xl font-serif">Shop</a>
                  <a href="#!" onClick={showPopupMessage} className="text-white hover:text-white transition text-xl font-serif">About us</a>
                  <a href="#!" onClick={showPopupMessage} className="text-white hover:text-white transition text-xl font-serif">Contact us</a>
                  <Link to="/addtocart" className='absolute right-28'>
                    <FaShoppingCart className="text-white hover:text-rose-600 transition w-6 h-24" />
                  </Link>
                  <Link to="/myorders" className='absolute right-40'>
                    <FaShoppingBag className="text-white hover:text-rose-600 transition w-6 h-6" />
                  </Link>
                  <a href="#!" onClick={showPopupMessage} className="text-white hover:text-white transition text-xl font-serif absolute right-5">Login</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Upcoming Feature</h2>
            <p className="text-gray-700">This feature is under development. Stay tuned!</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;