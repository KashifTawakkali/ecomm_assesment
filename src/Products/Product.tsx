import React, { useEffect, useState } from 'react';
import { BsSearch, BsHeartFill } from 'react-icons/Bs';
import { getProductsService } from '../API/productController';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';

type ProductType = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  images: string[];
};

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(24);

  const navigate = useNavigate();

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProductsService();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const navigateToDetails = (product: ProductType) => {
    navigate('/product-details', { state: product });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <ClipLoader loading={loading} size={50} color="#FF6347" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="container pb-16 mx-auto px-8">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Recommended for you</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded overflow-hidden group flex flex-col"
            >
              <div className="relative cursor-pointer" onClick={() => navigateToDetails(product)}>
                <img src={product.images[0]} alt={product.title} className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <BsSearch className="text-white text-lg w-9 h-8 bg-rose-600 rounded-full hover:bg-rose-800 transition" />
                  <BsHeartFill className="text-white text-lg w-9 h-8 bg-rose-600 rounded-full hover:bg-rose-800 transition" />
                </div>
              </div>
              <div className="pt-4 pb-3 px-4 flex-grow">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  {product.title}
                </h4>
                <p className="text-xl text-primary font-semibold">₹{product.price}</p>
              </div>
              <button className="block w-full py-1 text-center text-white bg-rose-600 border border-rose-600 rounded-b hover:bg-transparent hover:text-rose-600 transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-white bg-rose-600 rounded-l hover:bg-rose-700 transition mx-2"
          >
            Prev
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * productsPerPage >= products.length}
            className="px-4 py-2 text-white bg-rose-600 rounded-r hover:bg-rose-700 transition mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;