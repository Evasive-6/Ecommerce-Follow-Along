import React, { useEffect, useState } from 'react';
import axios from 'axios'

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
  },[])
  const handleDelete=async(id)=>{
    try {
      let response=await axios.delete(`http://localhost:8088/products/${id}`);
      console.log(response.data.message)
      const filteredData=productData.filter((e)=>e._id!=id);
      setProductData(filteredData)
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <>
    
    <div>
      <Card data={card}/>
      <Cart data={productData} handleDelete={handleDelete}/>
    </div>
    </>
  )
}

export default Home
