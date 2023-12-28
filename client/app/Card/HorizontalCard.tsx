import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import lm from "../styles/card.module.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HorizontalCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div
      className={`${"flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 m-2"}  ${
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
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className={`${"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}  ${
            lm.buttoncolor
          }`}
        >
          Read more
          {/* Your SVG code here */}
        </a>
      </div>
    </div>
  );
};

export default HorizontalCard;
