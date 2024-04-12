import React from 'react';

const CollectorProfile = () => {
  const collectorData = JSON.parse(localStorage.getItem("collectorData") || "{}");

  return (
    <div>
      {/* <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Collector Profile</h2>
      </div> */}

      {/* <div className="h-16 flex items-center justify-center">
        <h1 className="font-serif text-4xl font-bold text-center text-white">
          <b>Collector Profile</b>
        </h1>
      </div> */}

      <div className="max-w-xl mx-auto bg-white shadow-md overflow-hidden">
        <div className="mt-4 h-40 w-72 mx-auto border border-gray-300 flex justify-center items-center">
          <img
            alt="Profile Image"
            src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${collectorData.images}`}
            className="h-full object-cover w-72"
          />
        </div>
      </div>






      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">

          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900">
                <span className="text-purple-600 mr-2">Name:</span>{collectorData.centerName}
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900">
                <span className="text-purple-600 mr-2">Contact Person:</span>{collectorData.contactPerson}
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900">
                <span className="text-purple-600 mr-2">Address:</span>
                {collectorData.city}, {collectorData.subDistrict}, {collectorData.district}, {collectorData.state}
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900">
                <span className="text-purple-600 mr-2">Accepted Items:</span>{collectorData.acceptedItems}
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900">
                <span className="text-purple-600 mr-2">Services offered:</span>{collectorData.serviceOffered}
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900">
                <span className="text-purple-600 mr-2">Operating Hours:</span>{collectorData.timeFrom} to {collectorData.timeTo}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-full">
                Phone: {collectorData.phone}
              </span>
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-full">
                Email: {collectorData.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectorProfile;
