import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Shop() {
  return (
    <div>
    <Header/>
    <div className="container py-16  mx-auto px-8 ">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 text-center">shop by category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/automobiles">
                <img src="src/assets/category/Automobiles & Parts.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Automobiles & Parts</a>
            </Link>
            </div>
           
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/babyandkids">
                <img src="src/assets/category/Baby & Kids Products.png" alt="category 2" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Baby & Kids</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/beautypersonalcare">
                <img src="src/assets/category/Beauty & Personal Care.png" alt="category 3" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Beauty & Personal Care
                </a>
                </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/booksmusic">
                <img src="src/assets/category/Books & Music.png" alt="category 4" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Books & Music</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/cakeshops">
                <img src="src/assets/category/Cake Shops.png" alt="category 5" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Cake Shops
                    </a>
                    </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/dairyproducts">
                <img src="src/assets/category/Dairy Products.png" alt="category 6" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Dairy Products
                    </a>
                    </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/electronicgadgets">
                <img src="src/assets/category/Electronics & Gadgets.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Electronics & Gadgets</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/eventmanagement">
                <img src="src/assets/category/Event Management.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Event Management</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/fashion">
                <img src="src/assets/category/Fashion & Apparel.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Fashion & Apparel</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/foodbeverages">
                <img src="src/assets/category/Food & Beverages.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Food & Beverages</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/fruits">
                <img src="src/assets/category/Fruits & Vegetables.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Fruits & Vegatables</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/grocery">
                <img src="src/assets/category/Grocery.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Grocery</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/health">
                <img src="src/assets/category/Health & Fitness Products.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Health & Fitness</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/furniture">
                <img src="src/assets/category/Home & Furniture.png " alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Home & Furniture</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/laundry">
                <img src="src/assets/category/Laundry Shops.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Laundry Shops</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/nursery">
                <img src="src/assets/category/Nursery.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Nursery</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/services">
                <img src="src/assets/category/Services.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Services</a>
            </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
            <Link to="/sports">
                <img src="src/assets/category/Sports & Outdoor.png" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sports & Outdoor</a>
            </Link>
            </div>
        </div>
    </div>
  <Footer/>
    </div>
  )
}

export default Shop