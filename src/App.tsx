import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/Common/About";
import Shop from "./Components/Common/Shop";
import Contact from "./Components/Common/Contact";
import SignIn from "./Authentication/SignIn";
import Automobiles from "./Category/Shops/Automobiles";
import Shop1Products from "./Products/AutomobileProducts/Shop1Products";
import Shop1Productdetails from "./Products/AutomobileProducts/Shop1Productdetails";
import Addtocart from "./Components/Common/Addtocart";
import Buyautomobileshop1product1 from "./Products/AutomobileProducts/Buyautomobileshop1product1";
import Myorders from "./Components/Common/Myorders";
import SignUp from "./Authentication/SignUp";
import Profile from "./Components/Profile";
import ProductDetails from "./Components/Common/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/automobiles" element={<Automobiles />} />

        <Route path="/automobileshop1" element={<Shop1Products />} />

        <Route path="/shop1productdetails" element={<Shop1Productdetails />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/buyautomobileshop1product1" element={<Buyautomobileshop1product1 />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="back" element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
