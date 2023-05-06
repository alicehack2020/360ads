import React from 'react'
import "../App.css"
import l1 from "../img/i1.jpg"
const ProductCard = () => {
  return (
      <div className='productCard'>
          <div className='flex'>
              <h3 className='productDiscount'>$81.00 OFF</h3> 
               <div className='fav favDiv'>
                  <img src="https://ratnadeep.online/_next/image?url=%2Fimages%2Fheart.svg&w=32&q=75" alt="" srcset="" />
               </div>
          </div>   
          <div className='productImage'>
              <img src={l1} alt="" srcset="" /> 
          </div>
          <h1 className='productName'>some product name</h1>
          <p className='productSize'>100gm</p>

          <div className='flex'>
               <h1 className='produtPrice'>$166</h1>
              <button className='addToCard'>Add</button>
          </div>
          <p className='productOldPrice'>115</p>
          <p className='productSaving'>saving $ 102</p>
     </div>
  )
}

export default ProductCard