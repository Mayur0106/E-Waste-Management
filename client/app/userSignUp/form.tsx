"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [data, setData] = useState({
    username: "",
    email: "",
    // address: "",
    state: "",
    district: "",
    subDistrict: "",
    city: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmits = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      toast.error("Password and confirm password does not match", {
        position: "bottom-right",
      });
      return;
    }

    if (!file) {
      toast.error("Image is mendatory to upload", {
        position: "bottom-right",
      });
      return;
    }

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("fullName", data.username);
    formData.append("userName", data.username);
    formData.append("email", data.email);
    formData.append("state", data.state);
    formData.append("district", data.district);
    formData.append("subDistrict", data.subDistrict);
    formData.append("city", data.city);
    formData.append("phone", data.phoneNumber);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/signup`,
          formData
        )
        .then((res) => {
          console.log(res);
          console.log("success");
          toast.success("Registration Success", {
            position: "bottom-right",
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Registration failed", {
            position: "bottom-right",
          });
        });
    } catch (error) {
      toast.error("Something went wrong while uploading file", {
        position: "bottom-right",
      });

      console.log("error in form uploading : ", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setFile(file);
    // console.log(file);

    if (file) {
      setImageUrl(URL.createObjectURL(file));
    } else {
      setImageUrl(null);
    }

    // console.log(file);
    // console.log(imageUrl);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <form
        className="mt-8 w-full max-w-xl space-y-6"
        action="#"
        method="POST"
        onSubmit={handleSubmits}
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  {imageUrl && (
                    <img
                      // loading="lazy"
                      className="h-16 w-16 object-cover rounded-full"
                      src={imageUrl}
                      alt="Current profile photo"
                      key={imageUrl}
                    />
                  )}
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
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
              {/* // username input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        e-waste.com/
                      </span>
                      <input
                        type="text"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                        id="username"
                        autoComplete="username"
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
              {/* // state input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    state
                  </label>
                  <div className="mt-2">
                    <input
                      id="state"
                      name="state"
                      value={data.state}
                      onChange={handleChange}
                      type="text"
                      autoComplete="state"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // district input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    district
                  </label>
                  <div className="mt-2">
                    <input
                      id="district"
                      name="district"
                      value={data.district}
                      onChange={handleChange}
                      type="text"
                      autoComplete="district"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // subDistrict input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="subDistrict"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    subDistrict
                  </label>
                  <div className="mt-2">
                    <input
                      id="subDistrict"
                      name="subDistrict"
                      value={data.subDistrict}
                      onChange={handleChange}
                      type="text"
                      autoComplete="subDistrict"
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* // city input field */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    city
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      value={data.city}
                      onChange={handleChange}
                      type="text"
                      autoComplete="city"
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
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                      autoComplete="phoneNumber"
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
