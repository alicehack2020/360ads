import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { productData } from '../data'
import "../App.css"
const ProductCarousel = () => {
  return (
      <div>
          <Carousel data={productData} /> 
     </div>
  )
}

export default ProductCarousel