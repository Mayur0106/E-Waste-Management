import Form from "./form";

export default function UserSignup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up for user account
        </h2>
      </div>
      <Form />
    </div>
  );
}
