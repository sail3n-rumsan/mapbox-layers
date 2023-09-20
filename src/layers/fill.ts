const fillData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [85.31447079399777, 27.70722465413371],
            [85.31617882759299, 27.70720091457565],
            [85.31627111099685, 27.708376814569974],
            [85.31453794429282, 27.708396639076895],
            [85.31447079399777, 27.70722465413371],
          ],
        ],
      },
      properties: {
        title: "Ranipokhari",
      },
    },
  ],
};

const fillStyle = {
  type: "fill",
  paint: {
    "fill-color": "red", // Fill color
    "fill-opacity": 0.5, // Fill opacity
  },
};

export default { fillData, fillStyle };
