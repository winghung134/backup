import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./map.css";
import { useState } from "react";
export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API!,
  });
  if (!isLoaded) {
    return <>loading</>;
  }

  return <NextMap />;
}

function NextMap() {
  const [latitude, setlat] = useState(40);
  const [longitude, setlng] = useState(-80);
  const [zoom, setzoom] = useState(18);
  return (
    <>
      <td>
        <tr>Zoom:{zoom}</tr>
        <tr>lat:{latitude}</tr>
        <tr>long:{longitude}</tr>
      </td>
      <GoogleMap
        zoom={zoom}
        center={{ lat: parseInt(`${latitude}`), lng: parseInt(`${longitude}`) }}
        mapContainerClassName="map"
      >
<MarkerF key={1} position={{lat:40,lng:-80}} />

      </GoogleMap>
    </>
  );
}
