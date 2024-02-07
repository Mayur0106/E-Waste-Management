"use client";
import React, { useState } from "react";
import axios from "axios";

export default function filter() {
  const [data, setData] = useState({
    state: "",
    district: "",
    subDistrict: "",
    city: "",
  });

  const [collectorData, setCollectorData] = useState([]);

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
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
        console.log(err);
        setCollectorData([]);
      });
    // console.log(data);
  };

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
            return (
              <div
                key={item.id}
                className="item-block m-4 p-4 rounded-lg shadow-xl bg-blue-gray-100"
              >
                <h2 className="font-mono text-3xl">
                  <b>{item.centerName}</b>
                </h2>
                {item.images && (
                  <img
                    className="w-24 h-24 mb-4 rounded-2xl border-2 border-gray-600 object-cover"
                    src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${item.images}`}
                    alt={`Image of ${item.centerName}`}
                  />
                )}
                <p>Contact Person : {item.contactPerson}</p>
                <p>
                  Location: {item.city}, {item.subDistrict}, {item.district},{" "}
                  {item.state}
                </p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Accepted Items: {item.acceptedItems}</p>
                <p>Service Offered: {item.serviceOffered}</p>
                <p>Opening Time: {item.timeFrom}</p>
                <p>Closing Time: {item.timeTo}</p>
                {/* Additional details can be added based on your requirements */}
              </div>
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
