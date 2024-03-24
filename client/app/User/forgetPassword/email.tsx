"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface ChildComponentProps {
  changeParentState: (newState: string) => void;
  changeEmail: (str: string) => void;
}

const EmailPage: React.FC<ChildComponentProps> = ({
  changeParentState,
  changeEmail,
}) => {
  const [email, setEmail] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeEmail(email);
    try {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/verifyEmail/sendOtp`,
          { emailId: email }
        )
        .then((res) => {
          console.log(res);
          toast.success("Email sent successfully", {
            position: "bottom-right",
          });
          changeParentState("otp");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Error sending email", {
            position: "bottom-right",
          });
        });
    } catch (error) {
      console.error(error);
      toast.error("Error sending email", {
        position: "bottom-right",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center m-8">
      <h1>Write your email here...</h1>
      <div className="flex flex-col justify-center items-center">
        <form
          className="mt-8 w-full max-w-3xl justify-center px-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  type="email"
                  placeholder="email"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => changeParentState("email")}
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailPage;
