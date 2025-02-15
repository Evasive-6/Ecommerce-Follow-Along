import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user/profile/USER_ID'); // Replace USER_ID with actual user ID
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchData();
  }, []);

  const handleAddAddress = () => {
    // Implement add address functionality
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-700 mb-4">{user.email}</p>
      </div>

      <div className="border-t pt-4 mt-4">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        {address ? (
          <p className="text-gray-700">{address}</p>
        ) : (
          <p className="text-gray-500">No address found</p>
        )}
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 mt-2"
          onClick={handleAddAddress}
        >
          Add Address
        </button>
      </div>
    </div>
  );
};

export default Profile;
