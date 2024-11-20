/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import backgroundImage from './../assets/Background/bg2.png'

const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic
    console.log('Form submitted:', { name, email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" >
  
    {/* <div className="flex justify-center items-center h-screen"> */}
           <div className="bg-gray-100 min-h-screen flex justify-center items-center "></div>
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 border-2 " onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 border-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
          </div>
          <div className='py-8'>
          <Link to='/'>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
          </Link>
        </div>
        <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary">
                      Sign in
                    </Link>
                  </p>
                </div>
      </form>
    </div>
  );
};

export default SignUpForm;
