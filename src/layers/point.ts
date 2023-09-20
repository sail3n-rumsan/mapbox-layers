const pointData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [85.31235303305883, 27.700523848586915],
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

const labelData = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [85.31235303305883, 27.700523848586915],
  },
  properties: {
    title: "Dharahara", // Label text
  },
};

const labelStyle = {
  type: "symbol",
  layout: {
    "text-field": ["get", "title"],
    "text-anchor": "top",
    "text-offset": [0, 1],
  },
  paint: {
    "text-color": "yellow", // Label text color
  },
};

export default { pointData, pointStyle, labelData, labelStyle };
