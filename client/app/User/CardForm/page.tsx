"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


export default function CardForm() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [data, setData] = useState({
    userName: "",
    email: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmits = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!file) {
      toast.error("Image is mandatory to upload", {
        position: "bottom-right",
      });
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("description", description);
    formData.append("userName", data.userName);
    formData.append("email", data.email);
    formData.append("title", data.title);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/createCard`,
        formData
      );
      toast.success("Card created successfully", {
        position: "bottom-right",
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error creating card:", error);
      toast.error("Failed to create card", {
        position: "bottom-right",
      });
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  data.email = user.email;
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className="bg-blue-100 ">
        <span
          className="text-2xl font-serif text-center font-bold"
          style={{ marginLeft: "600px", paddingTop: "20px" }}
        >
          Card Information
        </span>

        <div className="min-h-screen flex items-center justify-center">
          <div className="items-center justify-center"></div>
          <div className="max-w-6xl border border-gray-300 rounded-md p-8">
            <form
              className="w-full space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmits}
            >
              <div className="flex flex-col space-y-4" style={{ width: "500px" }}>
                <label className="flex items-center space-x-4">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="flex-grow text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                  />
                </label>
                <label className="flex items-center space-x-4">
                  <textarea
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="flex-grow w-full max-w-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full max-w-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  type="text"
                  name="userName"
                  value={data.userName}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full max-w-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                {isLoading && (
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
