// pages/index.js

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import mpage from "../styles/MainPage.module.css";

export default function ShowCard (){
  return (
    <div className="min-h-screen bg-blue-100 flex  flex-col  justify-center">
     
      <div className="flex items-center mb-8">
      <div className="w-1/3">
        <div className="ml-9"> {/* Adjusted margin to mr-8 */}
          <Image
            loading="lazy"
            src="/tree.png"
            alt="Tree"
            width={300}
            height={140}
            className="rounded-lg"
          />
        </div>
        </div>
       
       
        <div className="w-2/3 ml-auto justify-center">
  <h1 className="text-4xl font-bold text-blue-900">Welcome to Card Manager</h1>
 

 
  <div className="flex space-x-6 mt-4 ml-12">
  <Link href="/User/userCard" className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden">
    <span className="block group-hover:opacity-0 transition duration-300">Show Cards</span>
    <span className="absolute inset-y-0 left-0 w-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:left-1/2"></span>
    <span className="absolute inset-y-0 right-0 w-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:right-1/2"></span>
    <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-1/2"></span>
    <span className="absolute inset-y-0 right-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:right-1/2"></span>
  </Link>
  <Link href="/User/CardForm" className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden">
    <span className="block group-hover:opacity-0 transition duration-300">Create Card</span>
    <span className="absolute inset-y-0 left-0 w-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:left-1/2"></span>
    <span className="absolute inset-y-0 right-0 w-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:right-1/2"></span>
    <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-1/2"></span>
    <span className="absolute inset-y-0 right-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:right-1/2"></span>
  </Link>
</div>




</div>

</div>

      
    </div>
  );
};
