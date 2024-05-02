import React from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageUrl }) => {
  if (!isOpen) return null;

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
