import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-800 footer-bg-color">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black font-bold">
          <div className="mb-4">
            <h3 className="text-4xl font-bold py-4 text-gray-400">Explore</h3>
            <div className='text-xl py-2'><a href="#">Home</a></div>
            <div className='text-xl py-2'><a href="#">About Us</a></div>
            <div className='text-xl py-2'><a href="#">Pricing</a></div>
            <div className='text-xl py-2'><a href="#">Download</a></div>
          </div>
          <div className="mb-4">
            <h3 className="text-4xl font-bold py-4 text-gray-400">Follow Us</h3>
            <div className='text-xl py-1'><a href="#">Privacy Policy</a></div>
            <div className='text-xl py-1'><a href="#">T&amp;C</a></div>
            <div className='text-xl py-1'><a href="#">Legal</a></div>
          </div>
          <div className="mb-4">
            <h3 className="text-4xl font-bold py-4 text-gray-400">Get In Touch</h3>
            <div className="text-xl flex items-center py-1">
              <FaPhone className="mr-1" />
              <a href="tel:8668234170">+918668234170</a>
            </div>
            <div className='text-xl flex items-center py-1'>
              <FaEnvelope className="mr-1" />
              <a href="patelkashif08@gmail.com">patelkashif08@gmail.com</a>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-4xl font-bold py-4 text-gray-400">Address</h3>
            <div className="text-xl flex items-center py-1">
              <FaMapMarkerAlt className="mr-1" />
              <p>
                <a>78,Sayyedhussain Patil House,</a>
                <br />
                <a>Main Road Near HDFC Bank,</a>
                <br />
                <a>Alas Kolhapur Maharashtra -416104</a>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center text-gray-500">
            <span>Copyright © {new Date().getFullYear()}</span>
            <span className='text-blue-500'>KashifPatil@All Right Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
