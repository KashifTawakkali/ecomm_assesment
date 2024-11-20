import Footer from './Common/Footer';
import Header from './Common/Header';
import Carousel from './Common/Carousel';
import Product from '../Products/Product';

function Home() {
  return (
    <div id='Home'>
      <Header />
      <Carousel />
      {/* *****Features***** */}
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center items-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="src/assets/icons/delivery-van.svg" alt="About image" className="w-25 h-12" />
            <img src="src/assets/icons/delivery-van.svg" alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over ₹200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="src/assets/icons/money-back.svg" alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Return Policy</h4>
              <p className="text-gray-500 text-sm">30 days money return</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="src/assets/icons/service-hours.svg" alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
      {/* *****Features***** */}

      {/* *****Categories***** */}

      {/* *****Categories***** */}

      {/* <!-- new arrival --> */}
      {/* <NewArrival/> */}
      {/* <!-- ./new arrival --> */}

      {/* <!-- ads --> */}
      <div className="container pb-16 mx-auto">
        <a href="#">
          <img src="src/assets/offer.jpg" alt="ads" className="w-full" />
        </a>
      </div>
      {/* <!-- ./ads --> */}

      {/* <!-- product --> */}
      <Product />
      {/* <!-- ./product --> */}

      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- Footer --> */}
    </div>
  );
}

export default Home;
