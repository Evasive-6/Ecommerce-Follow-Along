import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        productName: '',
        description: '',
        price: ''
    });

    useEffect(() => {
        fetch(`http://localhost:8088/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data.data))
            .catch((err) => console.log(err))
    }, [id]);

    return (
        <div>
            <div className='max-w-md h-auto bg-slate-300 rounded-2xl flex flex-col justify-center items-center mx-auto my-24 p-6 shadow-lg'>
                <div className='text-4xl mb-4'>Edit Form</div>
                <form  className='w-full flex flex-col items-center'>
                    <input 
                        className='p-3 w-60 mb-4 rounded-2xl' 
                        type='text' 
                        placeholder='Enter Product Name' 
                        name='productName' 
                        value={product.productName} 
                    />
                    <input 
                        className='p-3 w-60 mb-4 rounded-2xl' 
                        type='text' 
                        placeholder='Enter Product Description' 
                        name='description' 
                        value={product.productDescription}  
                    />
                    <input 
                        className='p-3 w-60 mb-4 rounded-2xl' 
                        type='text' 
                        placeholder='Enter Product Price' 
                        name='price' 
                        value={product.productPrice} 
                    />
                    <input 
                        multiple 
                        className='p-3 w-60 mb-4 rounded-2xl' 
                        type='file' 
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                        className='bg-white p-2 border border-black rounded-2xl hover:shadow-md' 
                    />
                </form>
            </div>
        </div>
    )
}

export default Edit
