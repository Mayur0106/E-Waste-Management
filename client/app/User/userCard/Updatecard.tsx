"use client";

import Image from "next/image";
import React, { useState } from 'react';
import axios from 'axios';

interface UpdatecardProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  userName: string;
  title: string;
  descriptionText: string;
  imageUrl: string;
}

const Updatecard: React.FC<UpdatecardProps> = ({ isOpen, onClose, id, userName, title, descriptionText, imageUrl }) => {

  const a = descriptionText;

  const [description, setDescription] = useState(a);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted
    try {
      const cardId = id;
      await axios.put(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/updateCard/${cardId}`, { description });
      console.log('Card description updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating card description:', error);
    } finally {
      setIsLoading(false); // Set loading to false when request is completed (success or failure)
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center w-11/12 max-w-6xl max-h-screen overflow-y-auto">
          <div className="flex flex-row justify-between w-full">
            <div className="w-1/3">
            <Image
                loading="lazy"
                src="/tree.webp"
                alt={title}
                width={240}
                height={130}
                onClick={onClose}
                className="cursor-pointer"
              />

            </div>
            <div className="w-2/3">
              <div className="bg-white rounded-lg p-8 flex flex-col items-center max-w-full max-h-screen overflow-y-auto">
                <div className="mb-4">
                  <Image
                    loading="lazy"
                    src={imageUrl}
                    alt={title}
                    width={250}
                    height={140}
                    className="rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold">{title}</h2>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <h2 className="text-sm italic mr-4">- {userName}</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="bg-blue-100 p-3 rounded-lg w-full mb-4 max-w-full h-48 overflow-y-auto scrollbar">
                  <textarea
                    className="w-full h-full bg-transparent border-none focus:outline-none text-gray-800 font-medium"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={onClose}
                    style={{ marginRight: '10px' }} // Add margin-right to create space
                  >
                    Back
                  </button>
                  <button
                    className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    type="submit"
                    style={{ transition: 'opacity 0.5s ease-in-out' }}
                    disabled={isLoading} // Disable button when loading
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900 mr-2"></div>
                    ) : null}
                    {isLoading ? 'Saving...' : 'Save'}
                  </button>
                </div>





              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar {
          scrollbar-width: thin;
          scrollbar-color: green #f1f1f1;
        }
        .scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .scrollbar::-webkit-scrollbar-thumb {
          background: green;
        }
      `}</style>
    </div>
  );
};

export default Updatecard;
