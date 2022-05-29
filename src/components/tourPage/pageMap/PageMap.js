import React, { useEffect, useState } from "react";
import ReactMapboxGl, { ZoomControl, Popup, Marker } from "react-mapbox-gl";
import { BsFillGeoAltFill } from "react-icons/bs";

function PageMap({ tour }) {
  const [bounds, setBounds] = useState([
    tour.startLocation.coordinates[0],
    tour.startLocation.coordinates[1],
    tour.startLocation.coordinates[0],
    tour.startLocation.coordinates[1],
  ]);

  useEffect(() => {
    tour.locations.forEach((location) => {
      if (location.coordinates[0] < bounds[0]) {
        bounds[0] = location.coordinates[0];
        setBounds([...bounds]);
      } else if (location.coordinates[0] > bounds[2]) {
        bounds[2] = location.coordinates[0];
        setBounds([...bounds]);
      }
      if (location.coordinates[1] < bounds[1]) {
        bounds[1] = location.coordinates[1];
        setBounds([...bounds]);
      } else if (location.coordinates[1] > bounds[3]) {
        bounds[3] = location.coordinates[1];
        setBounds([...bounds]);
      }
    });
  }, []);
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  });

  return (
    <div className="tour-page-map-container">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{ height: 500, width: "100vw", marginTop: "-9vw" }}
        center={tour.startLocation.coordinates}
        zoom={[6]}
        fitBounds={bounds}
        fitBoundsOptions={{
          padding: { top: 150, left: 50, bottom: 50, right: 50 },
        }}
        scrollZoom={false}
      >
        {tour.locations.map((location, i) => {
          return (
            <div key={i}>
              <Popup
                coordinates={location.coordinates}
                offset={{
                  "bottom-left": [12, -38],
                  bottom: [0, -38],
                  "bottom-right": [-12, -38],
                }}
              >
                <p>{`Day ${location.day}: ${location.description}`}</p>
              </Popup>
              <Marker coordinates={location.coordinates} anchor="bottom">
                <BsFillGeoAltFill size="2rem" color="red" />
              </Marker>
            </div>
          );
        })}
        <ZoomControl />
      </Map>
    </div>
  );
}

export default PageMap;
