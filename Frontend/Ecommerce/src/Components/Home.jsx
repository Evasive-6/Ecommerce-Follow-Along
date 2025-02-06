import React, { useEffect, useState } from 'react'

import card from "./data.json"
import Card from './Card'
import Cart from "./Cart"

const Home = () => {
  let [productData,setProductData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8088/products").then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setProductData(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return (
    <>
    
    <div>
      <Card data={card}/>
      <Cart data={productData}/>
    </div>
    </>
  )
}

export default Home
