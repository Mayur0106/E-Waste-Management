"use client";

import Filter from "./filterForm";
import React, { useState } from "react";

export default function collector_side({
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
      <div className="w-3/5 h-screen bg-lime-200 overflow-y-hidden hover:overflow-y-scroll"></div>
    </div>
  );
}
