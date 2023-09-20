const lineData = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
      [85.31347032854391, 27.699888597402563],
      [85.31659837961891, 27.700192400679946],
      [85.3163263829617, 27.704446833939787],
      [85.31378883143464, 27.7045598723936],
      [85.31347032854391, 27.699888597402563],
    ],
  },
  properties: {
    title: "Tundikhel Ground",
  },
};

const lineStyle = {
  type: "line",
  paint: {
    "line-color": "blue",
    "line-width": 2,
  },
};

export default { lineData, lineStyle };
