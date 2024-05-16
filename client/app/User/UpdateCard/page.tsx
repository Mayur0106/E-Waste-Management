"use client";

import React, { useState,useEffect } from 'react';
import axios from 'axios';

const UpdateCard = () => {

  const [login, setLogin] = useState(false);
  const tokenFromLocalStorage = localStorage.getItem("token");
  useEffect(() => {
    if (!tokenFromLocalStorage) {
      // router.push("/User/login");
      setLogin(false);
    } else {
      setLogin(true);
    }

      // Respond to the "storage" event
      function storageEventHandler(event: StorageEvent) {
        if (event.key === "token") {
          const token = JSON.parse(event.newValue as string);
          setLogin(true);
        }
      }
      window.addEventListener("storage", storageEventHandler);
  
      // Clean up: Remove the event handler when the component unmounts
      return () => {
        window.removeEventListener("storage", storageEventHandler);
      };
    }, []);

    


  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const cardId = '49'; // Replace '123' with the actual ID of the card

      //    (`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/getCard`)
      await axios.put(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/updateCard/${cardId}`, { description });
      console.log('Card description updated successfully!');
    } catch (error) {
      console.error('Error updating card description:', error);
    }
  };

  return (
    <div>
      <h1 style={{ cursor: 'not-allowed' }}>Update Card Description</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">New Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Description</button>
      </form>
    </div>
  );
};

export default UpdateCard;
