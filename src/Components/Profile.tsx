/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Link } from 'react-router-dom'
import {  FaPencilAlt, FaShoppingBag, FaUser, FaUserCircle } from 'react-icons/fa'

function Profile() {
    const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

 
  return (
    <><Header />
    <div className='bg-gray-200'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 px-24 ">
              <div className="col-span-2  ">
                  <div className='border px-6 py-6 bg-white '>
                  <div className="grid grid-cols-3 grid-flow-col ">
            
            <div className=''>
            <label className="flex items-center text-gray-700 text-2xl font-medium mb-2 pb-4" htmlFor="inputField">
        Personal Information
        <FaPencilAlt className="ml-8" /> 
      </label>
      <div className="flex space-x-8 px-12 ">
      <input
          className="flex-1 border rounded py-2 px-3 text-gray-700 bg-gray-100"
          id="firstName"
          type="text"
          placeholder="First Name"
          readOnly // Add the readOnly attribute
          value=""
        />

        <input
          className="flex-1 border rounded py-2 px-3 text-gray-700 bg-gray-100"
          id="lastName"
          type="text"
          placeholder="Last Name"
          readOnly 
          value=""
        />
        </div>
             
              
            </div>
            
                </div>


                <div className="grid grid-cols-3 grid-flow-col pt-8 ">
            <div className=''>
            <label className="flex items-center text-gray-700 text-2xl font-medium mb-2 pb-4" htmlFor="inputField">
        Email Address
        <FaPencilAlt className="ml-8" /> 
      </label>
      <div className='px-12'>
      <input
          className="flex-1 border rounded py-2 px-3 text-gray-700 bg-gray-100"
          id="firstName"
          type="text"
          placeholder="abc@gmail.com"
          readOnly // Add the readOnly attribute
          value=""
        />
        </div>

            </div>
            
                </div>


                <div className="grid grid-cols-3 grid-flow-col pt-8 ">
            <div className=''>
            <label className="flex items-center text-gray-700 text-2xl font-medium mb-2 pb-4" htmlFor="inputField">
      Your Gender
        
      </label>
      <div className='px-12'>
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
        <label htmlFor="option1">Male</label>
      
        <input
          type="radio"
          id="option2"
          name="radioOptions"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          className="ml-12"
        />
        <label htmlFor="option2">Female</label>
      </div>
        </div>

        
        
             
              
            </div>
            
                </div>



                <div className="grid grid-cols-3 grid-flow-col pt-8 ">
            <div className=''>
            <label className="flex items-center text-gray-700 text-2xl font-medium mb-2 pb-4" htmlFor="inputField">
      Mobile Number
        <FaPencilAlt className="ml-8" /> 
      </label>
      <div className='px-12'>
      <input
          className="flex-1 border rounded py-2 px-3 text-gray-700 bg-gray-100"
          id="numberfield"
          type="number"
          placeholder="+91 9874563210"
          readOnly 
          value=""
        />
        </div>

        
        
             
              
            </div>
            
                </div>



                  </div>


                  




              </div>

          <div className=''>
        <div className="box-border h-auto w-auto   p-4 border-2  bg-white ">
        <div className="flex items-center  text-2xl font-medium mb-2 pb-4" >
            
        <FaUserCircle className="h-14 w-16"/>
        
        <div className='col-span-2 justify-center  pl-12'>
    Hello,
    <br></br>
 
       User Name
        </div>
        </div>
        </div>
        
    
       





        
<div className='pt-8'>
        <div className="box-border h-auto w-full p-4 border-2  bg-white ">
            <Link to="/myorders">
            <div className="flex items-center  text-xl font-medium mb-2 pb-4 border-b border-gray-300" >
        
        <FaShoppingBag className="ml-8" /> 
        <p className='pl-12 text-gray-500'>MY ORDERS</p>
        
      </div>
          </Link>


          
            <div className="flex items-center  text-xl font-medium mb-2 pb-4 " >
        
        <FaUser className="ml-8" /> 
        <p className='pl-12 text-gray-500'>ACCOUNT SETTINGS </p>
      </div>



    
        
        <p className='pl-24 text-gray-500'>Profile Information </p>
      
        
        
        <p className='pl-24 text-gray-500'>Manage Address</p>
     
         
        </div>
        </div>



        </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Profile