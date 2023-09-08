import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAP_STYLE = import.meta.env.VITE_MAP_STYLE;

function MapBox() {
  return (
    <div style={{ width: "100%" }}>
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          zoom: 1,
        }}
        mapStyle={`mapbox://${MAP_STYLE}`}
        style={{ width: "75vw", height: "80vh", backgroundColor: "red" }}
      />
    </div>
  );
}

export default MapBox;
