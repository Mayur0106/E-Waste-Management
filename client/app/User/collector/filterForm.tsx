"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function filter(props: any) {
  const router = useRouter();
  const [data, setData] = useState({
    state: "",
    district: "",
    subDistrict: "",
    city: "",
  });

  const collectorData = props.collectorData;
  const setCollectorData = props.setCollectorData;
  // const [collectorData, setCollectorData] = useState([]);

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleOnClick = (item: any) => {
    router.push(`/User/collectorProfile`);
    localStorage.setItem("collectorData", JSON.stringify(item));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/collectorAuth/findCollector`,
        data,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setCollectorData(res.data.data);
        console.log(collectorData);
      })
      .catch((err) => {
        toast.error(err.message || "No collector found", {
          position: "bottom-right",
        });
        console.log(err);
        setCollectorData([]);
      });
    // console.log(data);
  };

  function isJSON(str: string) {
    try {
      const value = JSON.parse(str);
      return typeof value === "object" && value !== null;
    } catch (e) {
      return false;
    }
  }

  return (
    <>
      <div className="h-auto rounded-xl bg-white  p-4 m-4 shadow-2xl w-96">
        <form onSubmit={handleSubmit}>
          <label className="flex flex-col mt-2">
            <span className="mb-1">State Name:</span>
            <input
              type="text"
              name="state"
              value={data.state}
              onChange={handleChange}
              className="mt-1 p-1 border rounded"
            />
          </label>
          <br />

          <label className="flex flex-col mt-2">
            <span className="mb-1">District:</span>
            <input
              type="text"
              name="district"
              value={data.district}
              onChange={handleChange}
              className="mt-1 p-1 border rounded"
            />
          </label>
          <br />

          <label className="flex flex-col mt-2">
            <span className="mb-1">Subdistrict:</span>
            <input
              type="text"
              name="subDistrict"
              value={data.subDistrict}
              onChange={handleChange}
              className="mt-1 p-1 border rounded"
            />
          </label>
          <br />

          <label className="flex flex-col mt-2">
            <span className="mb-1">City Name:</span>
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={handleChange}
              className="mt-1 p-1 border rounded"
            />
          </label>
          <br />

          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Filter
          </button>
        </form>
      </div>
      {collectorData.length ? (
        <div className="p-8">
          {collectorData.map((item: any) => {
            if (
              isJSON(item.acceptedItems) &&
              Array.isArray(JSON.parse(item.acceptedItems))
            ) {
              item.acceptedItems = JSON.parse(item.acceptedItems).join(", ");
            }

            if (
              isJSON(item.serviceOffered) &&
              Array.isArray(JSON.parse(item.serviceOffered))
            ) {
              item.serviceOffered = JSON.parse(item.serviceOffered).join(", ");
            }
            return (
              <div
                className="cursor-pointer max-w-sm w-full lg:max-w-full lg:flex item-block m-4 rounded-lg shadow-xl"
                key={item.id}
                onClick={() => handleOnClick(item)}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${item.images}`}
                  alt="Background image"
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                />

                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      Collector {item.id}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {item.centerName}
                    </div>
                    <p className="text-gray-700 text-base">
                      <b> Accepted Items: </b>
                      {item.acceptedItems}
                    </p>
                    <p className="text-gray-700 text-base">
                      <b> Services Offered: </b>
                      {item.serviceOffered}
                    </p>
                    <p className="text-gray-700 text-base">
                      <b> Address : </b>
                      {item.city}, {item.subDistrict}, {item.district},{" "}
                    </p>
                    <p className="text-gray-700 text-base">
                      <b> Operating Hours: </b>
                      {item.timeFrom} to {item.timeTo}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        {item.contactPerson}
                      </p>
                      <p className="text-gray-600">{item.phone} </p>
                      <p className="text-gray-600">{item.email} </p>
                    </div>
                  </div>
                </div>
              </div>
              // <div
              //   key={item.id}
              //   className="item-block m-4 p-4 rounded-lg shadow-xl bg-blue-gray-100"
              // >
              //   <h2 className="font-mono text-3xl">
              //     <b>{item.centerName}</b>
              //   </h2>
              //   {item.images && (
              //     <img
              //       className="w-24 h-24 mb-4 rounded-2xl border-2 border-gray-600 object-cover"
              //       src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${item.images}`}
              //       alt={`Image of ${item.centerName}`}
              //     />
              //   )}
              //   <p>Contact Person : {item.contactPerson}</p>
              //   <p>
              //     Location: {item.city}, {item.subDistrict}, {item.district},{" "}
              //     {item.state}
              //   </p>
              //   <p>Email: {item.email}</p>
              //   <p>Phone: {item.phone}</p>
              //   <p>Accepted Items: {item.acceptedItems}</p>
              //   <p>Service Offered: {item.serviceOffered}</p>
              //   <p>Opening Time: {item.timeFrom}</p>
              //   <p>Closing Time: {item.timeTo}</p>
              //   {/* Additional details can be added based on your requirements */}
              // </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>No Collector found Nearby</h1>
        </div>
      )}
    </>
  );
}
