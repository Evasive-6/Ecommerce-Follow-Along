import React, { useState } from 'react';

const Productform = () => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImages, setProductImages] = useState([]);

    const handleProductName = (e) => {
        setProductName(e.target.value);
    }
    const handleProductDescription = (e) => {
        setProductDescription(e.target.value);
    }
    const handleProductPrice = (e) => {
        setProductPrice(e.target.value);
    }
    const handleProductImages = (e) => {
        let files = e.target.files;
        let filesArray = Array.from(files);
        setProductImages([...productImages, ...filesArray]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let data={
            productName,
            productDescription,
            productPrice,
            productImages,
        }
        console.log(data);
        setProductName(''),
        setProductImages([]),
        setProductDescription(''),
        setProductPrice('')
    }
    
    return (
        <div className='max-w-md h-auto bg-slate-300 rounded-2xl flex flex-col justify-center items-center mx-auto my-24 p-6 shadow-lg'>
            <div className='text-4xl mb-4'>Product Form</div>
            <form action='' className='w-full flex flex-col items-center' onSubmit={handleSubmit}>
                <input className='p-3 w-60 mb-4 rounded-2xl' type='text' placeholder='Enter Product Name' onChange={handleProductName} value={productName}/>
                <input className='p-3 w-60 mb-4 rounded-2xl' type='text' placeholder='Enter Product Description' onChange={handleProductDescription} value={productDescription}/>
                <input className='p-3 w-60 mb-4 rounded-2xl' type='text' placeholder='Enter Product Price' onChange={handleProductPrice} value={productPrice}/>
                <input multiple className='p-3 w-60 mb-4 rounded-2xl' type='file' onChange={handleProductImages} />
                <input type="Submit" value="Submit" className='bg-white p-2 border border-black rounded-2xl hover:shadow-md'></input>
            </form>
        </div>
    );
}

export default Productform;
