import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import product from '../../assets/products/product1.jpg';



function Myorders() {
  return (
    <>
      <Header />



      <div className='border px-6 py-6 bg-white '>
        <div className='border-b-2 border-gray-300  '>
          <p className=' text-2xl px-4 font-semibold py-6'>Your Orders</p>

        </div>
        <br />
        <div className='box-border h-auto w-auto  border-2   rounded-lg  '>
          <div className='bg-gray-200 py-6 px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4  '>
              <p className=' '>Order placed : 1 September 2023</p>
              <p className=' '>Total : ₹ 20,000</p>
              <p className=' '>Ship To : Kashif Patel</p>
              <p className=' '>Order Id :  # 404-6651525-4744332</p>
            </div>

          </div>
          <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-6  '>
            <div className='px-12'>
              <img src={product} alt="product 1" className="w-32 h-32 " />
            </div>

            <div className=''>
              <p className="text-xl font-semibold mb-2  font-sans">Sofa </p>

            </div>

            <div>
              <p className="text-xl font-semibold mb-2  font-sans"> Quantity: 2</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2  font-sans">Delivered on Sep 08, 2023 </p>
            </div>
          </div>
          <div className='flex  justify-center pb-2'>
            <Link to="/buyautomobileshop1product1"
              className="block w-32 py-1 text-center text-white bg-rose-600 border border-rose-600 rounded hover:bg-transparent hover:text-rose-600 transition">Buy it again
            </Link>
            <Link to="/shop1productdetails">
              <p className='text-center text-rose-800 hover:bg-transparent hover:text-rose-600 block w-32 py-1 underline'>View your item</p>
            </Link>

          </div>
        </div>






        <br />
        <div className='box-border h-auto w-auto  border-2   rounded-lg  '>
          <div className='bg-gray-200 py-6 px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4  '>
              <p className=' '>Order placed : 1 September 2023</p>
              <p className=' '>Total : ₹ 20,000</p>
              <p className=' '>Ship To : Kashif Patel</p>
              <p className=' '>Order Id :  # 404-6651525-4744332</p>
            </div>

          </div>
          <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-6  '>
            <div className='px-12'>
              <img src={product} alt="product 1" className="w-32 h-32 " />
            </div>

            <div className=''>
              <p className="text-xl font-semibold mb-2  font-sans">Sofa </p>

            </div>

            <div>
              <p className="text-xl font-semibold mb-2  font-sans">  Quantity: 2</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2  font-sans">Delivered on Sep 08, 2023 </p>
            </div>
          </div>
          <div className='flex  justify-center pb-2'>
            <Link to="/buyautomobileshop1product1"
              className="block w-32 py-1 text-center text-white bg-rose-600 border border-rose-600 rounded hover:bg-transparent hover:text-rose-600 transition">Buy it again
            </Link>
            <Link to="/shop1productdetails">
              <p className='text-center text-rose-800 hover:bg-transparent hover:text-rose-600 block w-32 py-1 underline'>View your item</p>
            </Link>

          </div>
        </div>







        <br />
        <div className='box-border h-auto w-auto  border-2   rounded-lg  '>
          <div className='bg-gray-200 py-6 px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4  '>
              <p className=' '>Order placed : 1 September 2023</p>
              <p className=' '>Total :  Quantity: 220,000</p>
              <p className=' '>Ship To : Kashif Patel</p>
              <p className=' '>Order Id :  # 404-6651525-4744332</p>
            </div>

          </div>
          <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-6  '>
            <div className='px-12'>
              <img src={product} alt="product 1" className="w-32 h-32 " />
            </div>

            <div className=''>
              <p className="text-xl font-semibold mb-2  font-sans">Sofa </p>

            </div>

            <div>
              <p className="text-xl font-semibold mb-2  font-sans">  Quantity: 2</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2  font-sans">Delivered on Sep 08, 2023 </p>
            </div>
          </div>
          <div className='flex  justify-center pb-2'>
            <Link to="/buyautomobileshop1product1"
              className="block w-32 py-1 text-center text-white bg-rose-600 border border-rose-600 rounded hover:bg-transparent hover:text-rose-600 transition">Buy it again
            </Link>
            <Link to="/shop1productdetails">
              <p className='text-center text-rose-800 hover:bg-transparent hover:text-rose-600 block w-32 py-1 underline'>View your item</p>
            </Link>

          </div>
        </div>








        <br />
        <div className='box-border h-auto w-auto  border-2   rounded-lg  '>
          <div className='bg-gray-200 py-6 px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4  '>
              <p className=' '>Order placed : 1 September 2023</p>
              <p className=' '>Total : ₹ 20,000</p>
              <p className=' '>Ship To : Kashif Patel</p>
              <p className=' '>Order Id :  # 404-6651525-4744332</p>
            </div>

          </div>
          <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-6  '>
            <div className='px-12'>
              <img src={product} alt="product 1" className="w-32 h-32 " />
            </div>

            <div className=''>
              <p className="text-xl font-semibold mb-2  font-sans">Sofa </p>

            </div>

            <div>
              <p className="text-xl font-semibold mb-2  font-sans">  Quantity: 2</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2  font-sans">Delivered on Sep 08, 2023 </p>
            </div>
          </div>
          <div className='flex  justify-center pb-2'>
            <Link to="/buyautomobileshop1product1"
              className="block w-32 py-1 text-center text-white bg-rose-600 border border-rose-600 rounded hover:bg-transparent hover:text-rose-600 transition">Buy it again
            </Link>
            <Link to="/shop1productdetails">
              <p className='text-center text-rose-800 hover:bg-transparent hover:text-rose-600 block w-32 py-1 underline'>View your item</p>
            </Link>

          </div>
        </div>






        <br />
        <div className='box-border h-auto w-auto  border-2   rounded-lg  '>
          <div className='bg-gray-200 py-6 px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4  '>
              <p className=' '>Order placed : 1 September 2023</p>
              <p className=' '>Total : ₹ 20,000</p>
              <p className=' '>Ship To : Kashif Patel</p>
              <p className=' '>Order Id :  # 404-6651525-4744332</p>
            </div>

          </div>
          <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-6  '>
            <div className='px-12'>
              <img src={product} alt="product 1" className="w-32 h-32 " />
            </div>

            <div className=''>
              <p className="text-xl font-semibold mb-2  font-sans">Sofa </p>

            </div>

            <div>
              <p className="text-xl font-semibold mb-2  font-sans">  Quantity: 2</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2  font-sans">Delivered on Sep 08, 2023 </p>
            </div>
          </div>
          <div className='flex  justify-center pb-2'>
            <Link to="/buyautomobileshop1product1"
              className="block w-32 py-1 text-center text-white bg-rose-600 border border-rose-600 rounded hover:bg-transparent hover:text-rose-600 transition">Buy it again
            </Link>
            <Link to="/shop1productdetails">
              <p className='text-center text-rose-800 hover:bg-transparent hover:text-rose-600 block w-32 py-1 underline'>View your item</p>
            </Link>

          </div>
        </div>






        <br />
        <div className='box-border h-auto w-auto  border-2   rounded-lg  '>
          <div className='bg-gray-200 py-6 px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4  '>
              <p className=' '>Order placed : 1 September 2023</p>
              <p className=' '>Total : ₹ 20,000</p>
              <p className=' '>Ship To : Kashif Patel</p>
              <p className=' '>Order Id :  # 404-6651525-4744332</p>
            </div>

          </div>
          <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-6  '>
            <div className='px-12'>
              <img src={product} alt="product 1" className="w-32 h-32 " />
            </div>

            <div className=''>
              <p className="text-xl font-semibold mb-2  font-sans">Sofa </p>

            </div>

            <div>
              <p className="text-xl font-semibold mb-2  font-sans">  Quantity: 2</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2  font-sans">Delivered on Sep 08, 2023 </p>
            </div>
          </div>
          <div className='flex  justify-center pb-2'>
            <Link to="/buyautomobileshop1product1"
              className="block w-32 py-1 text-center text-white bg-rose-600 border border-rose-600 rounded hover:bg-transparent hover:text-rose-600 transition">Buy it again
            </Link>
            <Link to="/shop1productdetails">
              <p className='text-center text-rose-800 hover:bg-transparent hover:text-rose-600 block w-32 py-1 underline'>View your item</p>
            </Link>

          </div>
        </div>








      </div>






      <Footer />
    </>

  )
}

export default Myorders