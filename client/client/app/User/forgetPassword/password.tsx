import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ChildComponentProps {
  email: string;
  changeParentState: (newState: string) => void;
  role: string;
}

const PasswordPage: React.FC<ChildComponentProps> = ({
  email,
  changeParentState,
  role,
}) => {
  const router = useRouter();
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be same", {
        position: "bottom-right",
      });
      return;
    }
    console.log(password, confirmPassword);
    var pushUrl = "" as string;

    var url;
    if (role === "User") {
      url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/updatePassword`;
      pushUrl = "/login";
    } else {
      url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/collectorAuth/updatePassword`;
      pushUrl = "/collectorLogin";
    }

    axios
      .post(url, {
        email: email,
        newPassword: password,
      })
      .then((res) => {
        console.log(res);
        toast.success("Password reset successfully", {
          position: "bottom-right",
        });
        router.push(pushUrl);
      })
      .catch((err) => {
        router.push(pushUrl);
        console.error(err);
        toast.error("Error resetting password", {
          position: "bottom-right",
        });
      });
  };
  return (
    <div className="flex flex-col justify-center items-center m-8">
      <h1>Enter your password here</h1>
      <div className="flex flex-col justify-center items-center">
        <form
          className="mt-8 w-full max-w-3xl justify-center px-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                />
              </div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmChange}
                  type="password"
                  placeholder="confirm password"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => changeParentState("otp")}
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

export default PasswordPage;
