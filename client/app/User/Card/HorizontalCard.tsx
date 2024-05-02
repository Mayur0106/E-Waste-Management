import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Model";
import lm from "../styles/card.module.css";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  userName: string;
}

const HorizontalCard: React.FC<CardProps & { initial?: boolean }> = ({
  imageUrl,
  title,
  description,
  userName,
  initial = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`${"flex bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 m-2 relative"}  ${
          lm.lmargin
        }`}
      >
        <div className="flex-shrink-0 mr-4">
          <a href="#">
            <Image
              loading="lazy"
              src={imageUrl}
              alt={title}
              width={150}
              height={140}
              className="rounded-lg h-auto w-auto"
            />
          </a>
        </div>
        <div className="flex flex-col justify-between">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          {initial && (
            <button
              onClick={openModal}
              className={`${"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}  ${
                lm.buttoncolor
              } absolute bottom-4 right-4 border border-white`}
            >
              Show details
            </button>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={title}
            description={description}
            userName={userName}
            imageUrl={imageUrl}
          />
        </div>
      )}
    </>
  );
};

export default HorizontalCard;
