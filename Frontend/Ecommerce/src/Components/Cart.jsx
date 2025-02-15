import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cart = ({data,handleDelete}) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log('Navigating to:', `/editproducts/${id}`); // Debug log
    navigate(`/editproducts/${id}`);
  }

  return (
    <div className='flex flex-wrap w-full justify-center items-center'>
      {
        data.map((i,idx)=>(
            <div className="shadow-2xl flex flex-col justify-center items-center m-10 p-16" key={idx}>
            <img className='border-2 border-black w-64 h-64' src={i.productImage}/>
            <h3 className='font-bold uppercase text-2xl'>{i.productName}</h3>
            <h4 className='font-bold text-blue-500'>{i.productDescription}</h4>
            <button className='bg-red-500 text-white rounded-xl p-2' onClick={() => handleClick(i._id)}>Edit</button>
            <button className='bg-blue-500 text-white rounded-xl p-2' onClick={() => handleDelete(i._id)}>Delete</button>
            </div>
        ))
      }
    </div>
  )
}

export default Cart
