import React from 'react'

const Cart = ({data}) => {
  return (
    <div className='flex flex-wrap w-full justify-center items-center'>
      {
        data.map((i,idx)=>(
            <div className="shadow-2xl flex flex-col justify-center items-center m-10 p-16" key={idx}>
            <img className='border-2 border-black w-64 h-64' src={i.productImage}/>
            <h3 className='font-bold uppercase text-2xl'>{i.productName}</h3>
            <h4 className='font-bold text-blue-500'>{i.productDescription}</h4>
            </div>
        ))
      }
    </div>
  )
}

export default Cart
