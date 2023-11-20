"use client";
import React, { useState } from "react";
import Link from "next/link";

const Form = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [data, setData] = useState({ username: "", password: "" });
  const handleSubmits = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    // <div className="flex items-center justify-center h-screen bg-gray-200">
    <form
      className="w-full max-w-xl bg-shadow-green shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmits}
    >
      <h1 className="text-3xl text-center mb-4">Login</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          onChange={handleChange}
          name="username"
          value={data.username}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          onChange={handleChange}
          name="password"
          value={data.password}
          type="password"
          placeholder="*********"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-tulip-tree hover:bg-carnation text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <Link
          className="inline-block align-baseline font-bold text-sm text-sea-green hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </Link>
      </div>
    </form>
    // </div>
  );
};

export default Form;
