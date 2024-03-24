"use client";

import OtpPage from "./otp";
import EmailPage from "./email";
import PasswordPage from "./password";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function page({}) {
  const searchParams = useSearchParams();
  let Role = searchParams.get("Role") as string;

  if (typeof Role === "undefined") {
    return <div>Role is undefined</div>;
  }

  const [page, setPage] = useState<string>("email"); // ["email", "otp", "password"]
  const [email, setEmail] = useState<string>("");
  const changePage = (page: string) => {
    setPage(page);
  };

  const changeEmail = (str: string) => {
    setEmail(str);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font:extrabold font-sans hover:font-serif m-4">
        <h1>Forget Password</h1>
      </div>
      {page === "email" && (
        <EmailPage changeParentState={changePage} changeEmail={changeEmail} />
      )}
      {page === "otp" && (
        <OtpPage role={Role} email={email} changeParentState={changePage} />
      )}
      {page === "password" && (
        <PasswordPage
          role={Role}
          email={email}
          changeParentState={changePage}
        />
      )}
    </div>
  );
}
