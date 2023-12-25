"use client";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [data, setData] = useState({
    centerName: "",
    contactPerson: "",
    email: "",
    address: "",
    phoneNumber: "",
    operatingHours: "",
    acceptedItems: "",
    serviceOffered: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmits = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/collectorAuth/signup", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("success");
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form
        className="mt-8 w-full max-w-xl justify-center px-8 space-y-6"
        action="#"
        method="POST"
        onSubmit={handleSubmits}
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src="/Brand_logo.jpg"
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "
                  />
                </label>
              </div>
              {/* // center name input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="centerName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Center Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="centerName"
                      name="centerName"
                      value={data.centerName}
                      onChange={handleChange}
                      type="centerName"
                      autoComplete="centerName"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // username input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="contactPerson"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contact Person
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        e-waste.com/
                      </span>
                      <input
                        type="text"
                        name="contactPerson"
                        value={data.contactPerson}
                        onChange={handleChange}
                        id="contactPerson"
                        autoComplete="contactPerson"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* // email input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      type="email"
                      autoComplete="email"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // address input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      value={data.address}
                      onChange={handleChange}
                      type="address"
                      autoComplete="address"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // phone number input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={data.phoneNumber}
                      onChange={handleChange}
                      type="phoneNumber"
                      autoComplete="phoneNumber"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // operating hours input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="operatingHours"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Operating Hours
                  </label>
                  <div className="mt-2">
                    <input
                      id="operatingHours"
                      name="operatingHours"
                      value={data.operatingHours}
                      onChange={handleChange}
                      type="operatingHours"
                      autoComplete="operatingHours"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // accepted items input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="acceptedItems"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Accepted Items
                  </label>
                  <div className="mt-2">
                    <input
                      id="acceptedItems"
                      name="acceptedItems"
                      value={data.acceptedItems}
                      onChange={handleChange}
                      type="acceptedItems"
                      autoComplete="acceptedItems"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // service offered input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="serviceOffered"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Service Offered
                  </label>
                  <div className="mt-2">
                    <input
                      id="serviceOffered"
                      name="serviceOffered"
                      value={data.serviceOffered}
                      onChange={handleChange}
                      type="serviceOffered"
                      autoComplete="serviceOffered"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // password input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      type="password"
                      autoComplete="password"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // confirm password input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      onChange={handleChange}
                      type="password"
                      autoComplete="password"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
