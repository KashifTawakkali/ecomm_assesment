import React, { useState } from 'react'
import {  BsArrowLeft } from 'react-icons/Bs';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Common/Sidebar';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';


function Automobiles() {
  return (
    <>
   <Header/>
    <div>
    <div className="container pb-16  mx-auto px-8">
<h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 text-center py-8">Automobile</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <Link to="/automobileshop1">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop1.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                
                
            </div>
        
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 1</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
       </div>
    </div>
    </Link>
    <Link to="/automobileshop2">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative ">
            <img src="src/assets/Automobileshop/shop2.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
        
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 2</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
       </div>
    </div>
    </Link>
    <Link to="/automobileshop3">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop3.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
        
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 3</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
       </div>
    </div>
    </Link>
    <Link to="/automobileshop4">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop4.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
        
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 4</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
      </div> 
    </div>
    </Link>
    <Link to="/automobileshop5">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop5.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
        
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 5</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            </div>
        </div>
       
    </div>
    </Link>
    <Link to="/automobileshop6">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop6.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
        
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 6</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
       </div>
    </div>
    </Link>
    <Link to="/automobileshop7">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop7.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
                <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 7</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
       </div>
    </div>
    </Link>
    <Link to="/automobileshop8">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop8.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
       
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 8</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
       </div>
    </div>
    </Link>
    <Link to="/automobileshop9">
    <div className="bg-white shadow rounded overflow-hidden group w-full h-full">
        <div className="relative">
            <img src="src/assets/Automobileshop/shop9.jpg" alt="product 1" className="w-full h-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                
                
            </div>
        
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Shop 9</h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-gray-400 font-semibold">All the parts are available</p>
                {/* <p className="text-sm text-gray-400 line-through">₹5000</p> */}
            </div>
            
        </div>
       </div>
    </div>
    </Link>
    
</div>
</div>
</div>
<Footer/>
</>
  )
}

export default Automobiles