import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import chroma from "chroma-js";
import telangana from "./telangana.json";
const TelanganaMap = () => {
    // Define the color scale
    const colorScale = scaleLinear()
      .domain([0, 100])
      .range(["#f7fbff", "#08306b"])
      .clamp(true);
  
    return (
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 5500 }}>
        <Geographies geography={telangana}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // Get the state name
              const stateName = geo.properties.NAME_1;
              // Get the value for the state (you'll need to replace this with your own data)
              const value = 50;
  
              // Set the fill color based on the value
              const fillColor = value ? colorScale(value) : "#EEE";
  
              return <Geography key={geo.rsmKey} geography={geo} fill={fillColor} />;
            })
          }
        </Geographies>
      </ComposableMap>
    );
  };
  
  export default TelanganaMap;
  