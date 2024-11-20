/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';
import { FaAngleLeft, FaAngleRight, FaPencilAlt } from 'react-icons/fa';
import product from '../../assets/products/product1.jpg';
import { Link } from 'react-router-dom';

function Buyautomobileshop1product1() {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState('Global business hub, Kharadi, 411014');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform any action you want to save the edited address here
    // You can also send the updated address to your backend if needed.
  };


  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12">
        <div className="col-span-2 px-8">
          <div className='border-b px-8 py-4'>
          <div className="grid grid-cols-3 grid-flow-col ">
            
            <div className='text-center'>
             
              <p className='font-bold text-2xl'>1. &nbsp; Delivery address</p>
            </div>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  className='border border-gray-300 rounded-md py-2 px-3 text-xl'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              ) : (
                <p className='text-xl'>{address}</p>
              )}
            </div>
            <div>
              {isEditing ? (
                <button className="text-white bg-rose-600 border border-rose-600  hover:bg-transparent hover:text-rose-600 transition" onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <FaPencilAlt className="text-xl" onClick={handleEditClick} />
              )}
            </div>
          </div>
          
        </div>
        
        <div className="grid grid-cols-3 grid-flow-col py-6">
        <div className='text-center'>
             
             <p className='font-bold text-2xl'>2. &nbsp; Review Items</p>
           </div>
           </div>

                <div className='border flex py-12'>
            <div className='px-12'>
          <img src={product} alt="product 1" className="w-46 h-56 "/>
          </div>
          <div >
            <h1 className="text-4xl font-semibold mb-2  font-sans">Product Name</h1>
            <div className="text-gray-600 mb-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt consequuntur minima deleniti quos quidem ipsa distinctio numquam magni. Quam adipisci, fuga in quas et amet nesciunt facilis quidem hic.
            </div>
            <div className="mb-4">
          
           
              <p className="text-xl font-semibold mb-1 "> Price: ₹ 20000</p>
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
                className="block w-32 py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Remove
              </Link>

             
              </div>
          </div>
          </div>

          <div className="grid grid-cols-3 grid-flow-col py-6 border-b">
        <div className='text-center'>
             
             <p className='font-bold text-2xl'>3. &nbsp; Payment Options</p>
           </div>
           
           </div>
           <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="option1"
          name="radioOptions"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label htmlFor="option1">Phonepe</label>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="option2"
          name="radioOptions"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label htmlFor="option2">Cash on delivery</label>
      </div>

      
      {/* <p className="text-gray-700">Selected option: {selectedOption}</p> */}
    </div>




          <div className='py-6'>
          <div className='border py-6 px-6 flex'>
          <button className="text-white bg-rose-600 border border-rose-600  hover:bg-transparent hover:text-rose-600 transition" onClick={handleSaveClick}>
                  Place Your Order
                </button>
                <div className='px-6'>
                     <p className='font-semibold text-rose-800 text-2xl'>Order total: ₹ 20,020</p>
                <p className='text-center '>
                By placing your order, you agree to Localcircle's privacy notice and conditions of use.
                </p>
                </div>

          </div>
          </div>
         
         
            
          
            
           
             
              
              
            
           
      
          
       
      </div>
                
      <div className='px-8'>
        <div className="box-border h-auto w-full p-4 border-2 px-12">
        <Link to="/buyautomobileshop1product1"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded hover:bg-transparent hover:text-rose-600 transition">Place Your Order
              </Link>
             
              <p className='text-center border-b border-gray-400'>
                By placing your order, you agree to Localcircle's privacy notice and conditions of use.
                </p>
                <p className='font-bold text-xl py-6'>Order Summary</p>
                <div className="flex justify-between font-semibold text-lg">
                     <p>Price:</p>
                    <p>₹ 20,000</p>
                    
                </div>
                <div className="flex justify-between font-semibold text-lg border-b border-gray-400">
                     <p>Delivery:</p>
                    <p>₹ 20</p>
                    
                </div>
                <div className="flex justify-between font-semibold text-2xl border-b border-gray-400 py-4 text-rose-800">
                     <p >Order total:</p>
                    <p>₹ 20,020</p>
                    
                </div>
                <div>
                  <p className='text-lg text-rose-800 py-6'>Your Savings: ₹ 1,720.00 (12%)</p>
                </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Buyautomobileshop1product1;
