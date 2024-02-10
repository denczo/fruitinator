import React, {useEffect, useState} from "react";
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import world from "../../mockData/countries.geo.json";

const DynamicMap = ({ country }) => {
  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    // Adjust center and zoom based on the country
    const countryCoordinates = getCountryCoordinates(country);
    if (countryCoordinates) {
      setCenter(countryCoordinates.center);
      setZoom(countryCoordinates.zoom);
    }
  }, [country]);

  const getCountryCoordinates = (country) => {
    // Dummy implementation - replace with actual country coordinates
    const countryCoordinates = {
      'Iran': { center: [53.688, 32.4279], zoom: 4 },
      // Add coordinates for other countries as needed
    };
    return countryCoordinates[country];
  };

  return (
    <div>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 200, center, zoom }}>
        {console.log(center, zoom)}
        <Geographies geography={world}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#D6D6DA', outline: 'none' },
                  hover: { fill: '#F53', outline: 'none' },
                  pressed: { fill: '#F53', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default DynamicMap;
