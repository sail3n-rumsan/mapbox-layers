const pointData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [85.31235303305883, 27.700523848586915],
      },
      properties: {
        title: "Dharahara", // Label text
      },
    },
  ],
};

const pointStyle = {
  type: "circle",
  paint: {
    "circle-radius": 6,
    "circle-color": "#007cbf",
  },
};

export default { pointData, pointStyle };
