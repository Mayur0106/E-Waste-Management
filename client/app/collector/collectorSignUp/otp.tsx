"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function OtpPage({
  changeParentState,
  email, // will be a page or nested layout
}: {
  changeParentState: (newState: string) => void;
  email: string;
}) {
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    console.log(email);
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
          setLoading(false);
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
  }, []);

  const router = useRouter();

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
        router.push("/collector/collectorLogin");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error verifying OTP", {
          position: "bottom-right",
        });
      });
  };

  return loading ? (
    <div className=" bg-blue-100 h-screen w-screen p-8">
      <h1>Loading...</h1>
      <div className="relative flex w-64 animate-pulse gap-2 p-4">
        <div className="h-12 w-12 rounded-full bg-green-400"></div>
        <div className="flex-1">
          <div className="mb-1 h-5 w-3/5 rounded-lg bg-red-400 text-lg"></div>
          <div className="h-5 w-[90%] rounded-lg bg-blue-400 text-sm"></div>
        </div>
        <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-yellow-400"></div>
      </div>
    </div>
  ) : (
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
            onClick={() => changeParentState("form")}
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
