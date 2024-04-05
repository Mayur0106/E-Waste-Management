"use client";

import React, { useState, useRef } from "react";
// import CustomMarker from "../collector/customMarker";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useRouter } from "next/navigation";
// this map is implemented using react-leaflet

const OpenStreetMap = (props) => {
  const router = useRouter();
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: 18.590349, lng: 74.00468 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const collectorData = props.collectorData;

  var icon = L.icon({
    iconUrl: "../../map_placeholder.png",
    iconSize: [35, 40],
    iconAnchor: [12, 41],
  });

  const handleOnClick = (item) => {
    router.push(`collectorProfile`);
    localStorage.setItem("collectorData", JSON.stringify(item));
  };

  return (
    <>
      <div className="container h-full w-full">
        {/* <div className="container">
          <h1 className="text-center-mt-5">OpenStreetMap Embeded</h1>
        </div> */}
        <div className="row h-full w-full">
          <div className="col h-full w-full">
            <div className="container h-full w-full">
              <MapContainer whenReady={setMap} center={[center.lat, center.lng]} zoom={13} scrollWheelZoom={true} className="h-full w-full"  >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {collectorData.map((collector) => {
                  return (
                    <div>

                      <Marker
                        position={[collector.latitude, collector.longitude]}
                        icon={icon}
                        riseOnHover={true}
                      >
                        <Popup>
                          <div onClick={() => handleOnClick(collector)} className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${collector.images}`} alt={`Image of ${collector.centerName}`} />
                            <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">{collector.centerName}</div>
                              <p className="text-gray-700 text-base">
                                <b>Name : </b> {collector.contactPerson}<br />
                                <b>Services offered : </b> {collector.serviceOffered}<br />
                                <b>Accepted Items : </b> {collector.acceptedItems}<br />
                                <b>Operating Hours : </b> {collector.timeFrom} to {collector.timeTo}<br />
                              </p>
                            </div>
                            <div className="px-6 pt-2 pb-2">
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{collector.phone} </span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{collector.email} </span>
                            </div>
                          </div>

                        </Popup>
                        {/* <Popup>
                          <h1>{collector.centerName}</h1>
                          <p>{collector.contactPerson}</p>
                          <p>{collector.email}</p>
                          <p>{collector.phone}</p>
                        </Popup> */}
                      </Marker>
                    </div>

                  );
                }
                )}
                {/* <CustomMarker isActive={true} data={{ position: [51.505, -0.09] }} map={map} /> */}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenStreetMap;
