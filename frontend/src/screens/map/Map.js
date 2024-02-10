import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

// const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"; // new url works

const MapChart = () => {

    const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"; // new url works

  return (
    <div>
      <ComposableMap projection="geoMercator">
        <ZoomableGroup center={[0, 0]} zoom={9}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Marker coordinates={[0, 0]}>
            <circle r={3} fill="#FF5533" />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
