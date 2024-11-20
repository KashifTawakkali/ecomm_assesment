import { BsSearch, BsHeartFill } from 'react-icons/Bs'
import Header from '../../Components/Common/Header'
import Footer from '../../Components/Common/Footer'
import { Link } from 'react-router-dom'

function Shop1Products() {
  return (
    <div>
    <Header/>
      
        <div className="container py-12  mx-auto px-8">
    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 text-center">Shop 1 Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product1.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                        Chair</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <Link to="/shop1productdetails"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">View details
              </Link>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product4.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                        King Size</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <a href="#"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add
                to cart</a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product2.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        Couple Sofa</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <a href="#"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add
                to cart</a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product3.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        Mattress X</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <a href="#"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add
                to cart</a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product1.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                        Chair</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <a href="#"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add
                to cart</a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product4.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                        King Size</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <a href="#"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add
                to cart</a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product2.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        Couple Sofa</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <a href="#"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add
                to cart</a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <img src="src/assets/products/product3.jpg" alt="product 1" className="w-full"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
             <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-100 transition"
                        title="view product">
                        <BsSearch/>
                    </a>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-rose-600 flex items-center justify-center hover:bg-rose-800 transition"
                        title="add to wishlist">
                        <BsHeartFill/>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        Mattress X</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">₹2000</p>
                    <p className="text-sm text-gray-400 line-through">₹5000</p>
                </div>
                
            </div>
            <a href="#"
                className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">Add
                to cart</a>
        </div>
    </div>
</div>
<Footer/>
</div>
  )
}

export default Shop1Products