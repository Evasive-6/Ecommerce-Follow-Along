import React, { useState } from 'react';
import axios from 'axios';

const Card = ({ data }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', imageUrl: '' });

  const handleEdit = (product) => {
    setIsEditing(product._id);
    setFormData(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`/api/products/${isEditing}`, formData);
      console.log('Product updated:', response.data);
      setIsEditing(null); // Exit edit mode
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='flex flex-wrap w-full justify-center items-center'>
      {data.map((i, idx) => (
        <div className="shadow-2xl flex flex-col justify-center items-center m-10 p-16" key={idx}>
          {isEditing === i._id ? (
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(null)}>Cancel</button>
            </div>
          ) : (
            <>
              <img className='border-2 border-black w-64 h-64' src={i.imageUrl} alt={i.name} />
              <h3 className='font-bold uppercase text-2xl'>{i.name}</h3>
              <h3 className='font-bold text-blue-500'>{i.price}</h3>
              <button onClick={() => handleEdit(i)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
