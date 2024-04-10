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
  console.log(user);
  return (
    <div className="flex flex-col h-screen w-screen items-center p-6 bg-gray-400 text-white shadow-md rounded-lg">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">User Profile</h2>

        {/* <p className="mt-4 text-gray-300">
          Hello, {user.fullName}! Here is your profile.
        </p> */}
      </div>
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <img
          alt="Profile Image"
          src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${user.profileImage}`}
          className="h-56 w-full object-cover rounded-t-xl"
        />

        <div className="rounded-b-[10px] bg-white p-4 !pt-5 sm:p-6">
          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>Full Name:</i>
              </b>
              {user.userName}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>City:</i>
              </b>
              {user.city}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>SubDistrict:</i>
              </b>
              {user.subDistrict}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>District:</i>
              </b>
              {user.district}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>State:</i>
              </b>
              {user.state}
            </h3>
          </div>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Phone: {user.phone}
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Email: {user.email}
            </span>
          </div>
        </div>
      </article>
      {/* <div className="w-72 items-center flex flex-col bg-green-100 p-10 rounded-md shadow-2xl">
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
      </div> */}
    </div>
  );
};

export default ProfilePage;
