import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Updatecard from "./Updatecard";

interface User {
  email: string;
 
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userName: string;
  email: string;
  user: User;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose,id, title, description, userName, email,imageUrl ,user}) => {
  const router = useRouter();
  const users = JSON.parse(localStorage.getItem("user") || "");
  console.log(users.email);
  console.log(email);

  let check=false;
  if(users.email==email){
    check=true;
  }

  console.log(check);

  if (!isOpen) return null;


  // const goToUpdateCard = () => {
  //   router.push(`/User/UpdateCard?id=${id}`);
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center max-w-3xl max-h-screen overflow-y-auto">

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
        
        
        <div className="flex items-center justify-end" style={{ marginLeft: '450px' }}>
  <h2 className="text-sm italic mr-4">- {userName}</h2>
  <div>
    


<img
  loading="lazy"
  className={`h-10 w-10 transition duration-300 hover:bg-gray-200 hover:shadow-xl transform hover:scale-110 ${
    check ? 'cursor-pointer' : 'cursor-not-allowed'
  }`}
  src="/edit.png"
  alt="ChatBot Icon"
  onClick={check ? openModal : undefined} 
/>


  </div>
</div>

{isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              <Updatecard
                isOpen={isModalOpen}
                onClose={closeModal}
                id={id}
                userName={userName}
                title={title}
                descriptionText={description}
                imageUrl={imageUrl}
              />
            </div>
          </div>
        </div>
      )}


{/* 
        <div className="text-right" style={{ marginLeft: '450px' }}>
          <h2 className="text-sm italic">- {}</h2>
        </div> */}


        <div className="bg-blue-100 p-4 rounded-lg w-full mb-4 max-w-full h-48 overflow-y-auto scrollbar">
          <p className="text-gray-800 font-medium">{description}</p>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
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

export default Modal;
