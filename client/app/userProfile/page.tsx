"use client";
import React from "react";

interface User {
  photo: string;
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  address: string;
}

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
      <div className="w-72 items-center flex flex-col bg-green-100 p-10 rounded-md shadow-2xl">
        <img
          className="w-24 h-24 mb-4 rounded-2xl border-2 border-gray-600 object-cover"
          src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${user.profileImage}`}
          alt="User"
        />
        <h2 className="mb-2 text-xl">{user.fullName}</h2>
        <p className="mb-2 bg-gray-150 rounded p-2 w-64 overflow-ellipsis shadow-lg">
          Username: {user.userName}
        </p>
        <p className="mb-2 bg-gray-150 rounded p-2 w-64 overflow-ellipsis shadow-lg">
          Email: {user.email}
        </p>
        <p className="mb-2 bg-gray-150 rounded p-2 w-64 overflow-ellipsis shadow-lg">
          Phone: {user.phone}
        </p>
        <p className="mb-2 bg-gray-150 rounded p-2 w-64 overflow-ellipsis shadow-lg">
          state: {user.state}
        </p>
        <p className="mb-2 bg-gray-150 rounded p-2 w-64 overflow-ellipsis shadow-lg">
          district: {user.district}
        </p>
        <p className="mb-2 bg-gray-150 rounded p-2 w-64 overflow-ellipsis shadow-lg">
          subDistrict: {user.subDistrict}
        </p>
        <p className="mb-2 bg-gray-150 rounded p-2 w-64 overflow-ellipsis shadow-lg">
          city: {user.city}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
