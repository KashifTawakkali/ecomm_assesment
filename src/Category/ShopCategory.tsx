import { Link } from 'react-router-dom'


function ShopCategory() {
  return (
    <div>
    
    <div className="container py-16  mx-auto px-8 ">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
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
            
        </div>
    </div>
  
    </div>
  )
}

export default ShopCategory