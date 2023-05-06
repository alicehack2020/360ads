import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './popular.css';
import l1 from "../img/i1.jpg"
import { Image } from '@chakra-ui/react';
function App() {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
    <Slider {...settings}>
        <div className="card">
            <Image
              src={
                l1
              } 
            />
        </div>
        <div className="card">
            <Image
              src={
                l1
              } 
            />
        </div>
        <div className="card">
            <Image
              src={
                l1
              } 
            />
        </div>
        <div className="card">
            <Image
              src={
                l1
              } 
            />
        </div>
         
      
    </Slider>
  </div>
  );
}

export default App;
