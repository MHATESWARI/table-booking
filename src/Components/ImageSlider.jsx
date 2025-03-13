import { useState } from "react";
import img1 from '../assets/hotel_img1.jpg'
import img2 from '../assets/hotel_img2.jpg'
import img3 from '../assets/hotel_img3.jpg'
import img4 from '../assets/hotel_img4.jpg'

const ImageSlider = () => {
  const images = [
    img1,
    img2,
    img3,
    img4
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="relative flex">
      <button onClick={prevImage} className="h-8 w-10 mt-28 md:mt-40">
        <i className="fa-solid fa-arrow-left"></i>
          
        </button>
        <img src={images[currentIndex]} alt="slider" className="w-70 h-40 mt-10 rounded-2xl shadow-2xl md:h-60 md:w-120 lg:h-70 lg:w-140 hover:scale-110 duration-500 transition-transform" />
        
        <button onClick={nextImage} className="h-8 w-10 mt-28 md:mt-40">
        <i className="fa-solid fa-arrow-right"></i>
          
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;