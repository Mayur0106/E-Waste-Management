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
  const item = JSON.parse(localStorage.getItem("collector") || "");
  return (
    <div className="flex flex-col h-screen w-screen items-center p-6 bg-gray-400 text-white shadow-md rounded-lg">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Collector Profile</h2>

        {/* <p className="mt-4 text-gray-300">
          Hello, {user.fullName}! Here is your profile.
        </p> */}

        <div
          className="cursor-pointer max-w-sm w-full lg:max-w-full lg:flex item-block m-4 rounded-lg shadow-xl"
          key={item.id}
          // onClick={() => handleOnClick(item)}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${item.images}`}
            alt="Background image"
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          />

          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Collector {item.id}
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {item.centerName}
              </div>
              <p className="text-gray-700 text-base">
                <b> Accepted Items: </b>
                {item.acceptedItems}
              </p>
              <p className="text-gray-700 text-base">
                <b> Services Offered: </b>
                {item.serviceOffered}
              </p>
              <p className="text-gray-700 text-base">
                <b> Address : </b>
                {item.city}, {item.subDistrict}, {item.district},{" "}
              </p>
              <p className="text-gray-700 text-base">
                <b> Operating Hours: </b>
                {item.timeFrom} to {item.timeTo}
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {item.contactPerson}
                </p>
                <p className="text-gray-600">{item.phone} </p>
                <p className="text-gray-600">{item.email} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
