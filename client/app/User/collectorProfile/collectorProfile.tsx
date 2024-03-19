const collectorProfile = () => {
  const collectorData = JSON.parse(
    localStorage.getItem("collectorData") as string
  );

  return (
    <div>
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Collector Profile</h2>
      </div>
      <article className=" hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <img
          alt="Profile Image"
          src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${collectorData.images}`}
          className="h-56 w-full object-cover rounded-t-xl"
        />

        <div className="rounded-b-[10px] bg-white p-4 !pt-5 sm:p-6">
          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>Name:</i>
              </b>
              {collectorData.centerName}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>Contact Person:</i>
              </b>
              {collectorData.contactPerson}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>Address:</i>
              </b>
              `{collectorData.city}, {collectorData.subDistrict},{" "}
              {collectorData.district}, {collectorData.state} `
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>Accepted Items:</i>
              </b>
              {collectorData.acceptedItems}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>Services offered:</i>
              </b>
              {collectorData.serviceOffered}
            </h3>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              <b>
                <i>Operating Hours:</i>
              </b>
              {collectorData.timeFrom} to {collectorData.timeTo}
            </h3>
          </div>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Phone: {collectorData.phone}
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Email: {collectorData.email}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default collectorProfile;
