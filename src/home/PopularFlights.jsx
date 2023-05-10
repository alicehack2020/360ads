import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './popular.css';
import l1 from "../img/i1.jpg"
import l2 from "../img/i2.jpg"
import l3 from "../img/i3.jpg"
import l4 from "../img/i4.jpg"
import { Heading, Image, Text } from '@chakra-ui/react';
import next from "../img/next.png"
import prev from "../img/prev.png"
function App() {
  

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={prev} alt="nextArrow"  position={'absolute'} top={'30%'} {...props}  width={'300px'}/>
    
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={next} alt="nextArrow"  position={'absolute'} top={'30%'} {...props}  width={'300px'}/>
  );

   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     initialSlide: 0,
     prevArrow: <SlickArrowLeft />,
     nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
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
      <Heading>Popular Flights Near You</Heading>
      <Text>Find dashing deals on domestic and international flights!</Text>
    <Slider {...settings}>
       
        <div className="card">
          <div className="card-top">
            <Image
              src={
                l1
              } 
            />
          </div> 
        </div>
        <div className="card">
          <div className="card-top">
            <Image
              src={
                l2
              } 
            />
          </div> 
        </div>
        <div className="card">
          <div className="card-top">
            <Image
              src={
                l3
              } 
            />
          </div> 
        </div>
        <div className="card">
          <div className="card-top">
            <Image
              src={
                l4
              } 
            />
          </div> 
        </div>
      
    </Slider>
  </div>
  );
}

export default App;
