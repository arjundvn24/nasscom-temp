import React from 'react';
import Plot from 'react-plotly.js';

const AQI_DATA = [20, 30, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135]

const AQI_HISTOGRAM_DATA = [
  {
    x: AQI_DATA,
    type: 'histogram',
    xbins: {
      size: 10
    },
    autobinx: false
  }
];

const AQI_HISTOGRAM_LAYOUT = {
  title: 'AQI Histogram',
  xaxis: {
    title: 'AQI Levels',
    tickmode: 'linear',
    tick0: 0,
    dtick: 10
  },
  yaxis: {
    title: 'Frequency'
  },
  // bargap: 0,
  bargroupgap: 0.05
};

const Histogram = () => {
  return (
    <Plot
      data={AQI_HISTOGRAM_DATA}
      layout={AQI_HISTOGRAM_LAYOUT}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Histogram;
