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
      <img
        className="w-24 h-24 mb-4 rounded-full border-2 border-gray-600 object-cover"
        src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${user.profileImage}`}
        alt="User"
      />
      <h2 className="mb-2 text-xl">{user.fullName}</h2>
      <p className="mb-2 bg-gray-200 rounded p-2">Username: {user.userName}</p>
      <p className="mb-2 bg-gray-200 rounded p-2">Email: {user.email}</p>
      <p className="mb-2 bg-gray-200 rounded p-2">Phone: {user.phone}</p>
      <p className="mb-2 bg-gray-200 rounded p-2">Address: {user.address}</p>
    </div>
  );
};

export default ProfilePage;
