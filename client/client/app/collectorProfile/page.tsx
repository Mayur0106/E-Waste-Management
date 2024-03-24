"use client";
import CollectorProfile from "./collectorProfile";
import OrderPage from "./order";

const collectorProfile = () => {
  return (
    <div className="flex">
      <div className="w-2/5 flex flex-col h-screen items-center p-6 bg-gray-400 text-white shadow-md rounded-lg">
        <CollectorProfile />
      </div>
      <div className="w-2/5">
        <OrderPage />
      </div>
      <div className="w-1/5">
        <h1>third part</h1>
      </div>
    </div>
  );
};

export default collectorProfile;
