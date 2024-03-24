"use client";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function OtpPage({
  changeParentState,
  role,
  email, // will be a page or nested layout
}: {
  changeParentState: (newState: string) => void;
  role: string;
  email: string;
}) {
  const [otp, setOtp] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/verifyEmail/checkOtp`,
        {
          emailId: email,
          otp: otp,
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("OTP verified successfully", {
          position: "bottom-right",
        });
        changeParentState("password");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error verifying OTP", {
          position: "bottom-right",
        });
      });
  };

  return (
    <div className="flex flex-col justify-center item-center m-8">
      <h1>write your otp here</h1>
      <form
        className="mt-8 w-full max-w-3xl justify-center px-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter OTP
            </label>
            <div className="mt-2">
              <input
                id="otp"
                name="otp"
                value={otp}
                onChange={handleChange}
                type="tel"
                pattern="[0-9]{6}"
                autoComplete="email"
                className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
  );
}
