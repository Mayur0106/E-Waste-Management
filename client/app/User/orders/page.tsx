"use client";

import React, { useEffect, useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Order {
  accepted: boolean;
  collectorId: number;
  completed: boolean;
  createdAt: string;
  description: string;
  id: number;
  product: string;
  quantity: number;
  rejected: boolean;
  updatedAt: string;
  userId: number;
  collector: {
    centerName: string;
    email: string;
    phone: string;
  };
}

exports.default = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [fetching, setFetching] = useState<Boolean>(true);

  useEffect(() => {
    console.log("Hello from the other side");
    Axios.post(
      `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/getOrders`,
      {},
      {
        headers: {
          "x-access-token": localStorage.getItem("collectorToken"),
        },
      }
    )
      .then((res) => {
        setOrders(res.data.data);
        localStorage.setItem(
          `userOrderCount`,
          JSON.stringify(res.data.data.length)
        );
        setLoading(false);
        console.log(res.data.data);
        toast.success("Orders Fetched", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch orders", {
          position: "bottom-right",
        });
      });
  }, [fetching]);

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
    <div className="bg-blue-100 h-screen w-screen p-8">
      <h1 className="font-bold text-3xl m-2 border-b-2 border-blue-800">
        Orders
      </h1>
      <div>
        <div className="border-2 border-blue-gray-500 p-1 m-2 rounded-2xl">
          <table className="rounded-xl m-2">
            <thead className="border-black border-2 p-2 m-1">
              <tr className="border-black border-2 p-2 m-1">
                <th className="border-black border-2 p-2 m-1">Product</th>
                <th className="border-black border-2 p-2 m-1">Quantity</th>
                <th className="border-black border-2 p-2 m-1">Description</th>
                <th className="border-black border-2 p-2 m-1">accept</th>
                <th className="border-black border-2 p-2 m-1">complete</th>
                <th className="border-black border-2 p-2 m-1">reject</th>
                <th className="border-black border-2 p-2 m-1">Collector</th>
                <th className="border-black border-2 p-2 m-1">Email</th>
                <th className="border-black border-2 p-2 m-1">Phone</th>
              </tr>
            </thead>
            <tbody className="border-black border-2 p-2 m-1">
              {orders.map((item) => (
                <tr key={item.id}>
                  <td className="border-black border-2 p-2 m-1">
                    {item.product}
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    {item.quantity}
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    {item.description}
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    <button
                      className={
                        item.accepted
                          ? "bg-green-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                          : "bg-transparent-500 text-blue-700 font-bold py-2 px-4 rounded"
                      }
                      // onClick={() => handleAccept(item.id)}
                      disabled={true}
                    >
                      {item.accepted ? "Accepted" : "Accept"}
                    </button>
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    <button
                      className={
                        item.completed
                          ? "bg-green-500  text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                          : "bg-transparent-500 text-blue-700 font-bold py-2 px-4 rounded"
                      }
                      // onClick={() => handleComplete(item.id)}
                      disabled={true}
                    >
                      {item.completed ? "Completed" : "Complete"}
                    </button>
                  </td>

                  <td className="border-black border-2 p-2 m-1">
                    <button
                      className={
                        item.rejected
                          ? "bg-red-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                          : "bg-transparent-500 text-blue-700 font-bold py-2 px-4 rounded"
                      }
                      // onClick={() => handleReject(item.id)}
                      disabled={true}
                    >
                      {item.rejected ? "Rejected" : "Reject"}
                    </button>
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    {item.collector.centerName}
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    {item.collector.email}
                  </td>
                  <td className="border-black border-2 p-2 m-1">
                    {item.collector.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
