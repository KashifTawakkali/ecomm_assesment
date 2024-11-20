import { useState, useEffect } from 'react';
// import Automobilesandparts from './../../assets/Automobilesandparts.png';
// import BeautyProducts from './../../assets/BeautyProducts.png';
// import ElectronicGadgets from './../../assets/ElectronicGadgets.png';
// import Electronics from './../../assets/Electronics.png';
// import furniture from './../../assets/furniture.png';
// import Groceries from './../../assets/Groceries.png';
// import localcircle from './../../assets/localcircle.png';
// import Electronicsnew from './../../assets/electronicsnew.png';
// E:\vitereact\Local_Circle_web\src\assets\electronicsnew.png
// import localcircle from './../../assets/Carousel/localcircle.png';
import BeautyProducts from './../../assets/Carousel/BeautyProduct.png'; 
import Electronics from './../../assets/Carousel/Electronics.png';
import Groceries from './../../assets/Carousel/Groceries.png';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
function Carousel() {
    // const [count, setCount] = useState(0)
  const images = [  
    
    // localcircle,
    BeautyProducts,
    Electronics,
    Groceries,
   
  
  ];
  const [backgroundImage, setBackgroundImage] = useState(images[1]);

  useEffect(() => {
    let currentIndex = 0;

    const changeBackgroundImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    };

    const interval = setInterval(changeBackgroundImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNext = () => {
    const currentIndex = images.indexOf(backgroundImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setBackgroundImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = images.indexOf(backgroundImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setBackgroundImage(images[previousIndex]);
  };
  return (
    <div>
        <div style={{ position: 'relative',height: '100%' }}>
        <img src={backgroundImage} alt="Background" style={{ width: "100%", height: "100%" } } className="carh " />
        <span className="prev-icon" onClick={handlePrevious}><FaAngleLeft /></span>
        <span className="next-icon" onClick={handleNext}><FaAngleRight /></span>
      </div>
    </div>

  )
}

export default Carousel