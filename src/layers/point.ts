const pointData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [85.31191543749941, 27.700608139657284],
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
