import React, { useEffect, useState } from 'react';
import Card from './Card';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await fetch('/users/email', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        const data = await response.json();
        setUserEmail(data.email);
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };

    fetchEmail();
  }, []);

  useEffect(() => {
    if (userEmail) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`/products/${userEmail}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }
  }, [userEmail]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <Card data={products} />
    </div>
  );
};

export default ProductList;
