import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css"
import l1 from "../img/i1.jpg"
import { settingsBanner } from './CarouselSetting';
const Carousel = () => {
  return (
      <div>
        <Slider {...settingsBanner}>
        <div className="card">
            <img src={l1}/>
        </div>
      </Slider>  
     </div>
  )
}

export default Carousel