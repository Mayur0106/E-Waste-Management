<<<<<<< HEAD
import Link from 'next/link';
// import styles from '../styles/HomeP.module.css';

export default function Collector() {
  return (
    <div >
      <h1>Welcome to E-Waste Management</h1>
=======
"use client";

import dynamic from "next/dynamic";
import Filter from "./filterForm";
// import Map from "./maps";
// import OpenStreetMap from "./maps";
const OpenStreetMap = dynamic(() => import("./maps"), {
  ssr: false,
});

import React, { useState } from "react";

export default function collector({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [collectorData, setCollectorData] = useState([]);
  return (
    <div className="flex">
      <div className="w-2/5 bg-blue-gray-200 flex flex-col items-center h-screen overflow-y-hidden hover:overflow-y-scroll">
        <div className="h-16 flex items-center justify-center my-8">
          <span className="h-1">
            <h1 className="font-mono text-4xl">
              <b>Find Nearby Collector Here</b>
            </h1>
          </span>
        </div>
        <Filter
          collectorData={collectorData}
          setCollectorData={setCollectorData}
        />
      </div>
      <div className="w-3/5 h-screen p-1 bg-grey-100 overflow-y-hidden hover:overflow-y-scroll">
        <OpenStreetMap collectorData={collectorData} />
        {/* <Map apikey={process.env.NEXT_PUBLIC_HERE_MAP_API_KEY || ""} /> */}
      </div>
>>>>>>> 8d2fc0bfd476f958f75a524ee97701b7169b03f6
    </div>
  );}