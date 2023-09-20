import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LAYERS from "../layers";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAP_STYLE = import.meta.env.VITE_MAP_STYLE;

function MapBox() {
  return (
    <div style={{ width: "100%" }}>
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 85.324,
          latitude: 27.7172,
          zoom: 2,
        }}
        mapStyle={`mapbox://${MAP_STYLE}`}
        style={{ width: "75vw", height: "80vh" }}
      >
        <Source id="my-data" type="geojson" data={LAYERS.pointData}>
          <Layer {...LAYERS.pointStyle} />
          <Layer {...LAYERS.labelStyle} />
        </Source>

        <Source id="line-source" type="geojson" data={LAYERS.lineData}>
          <Layer {...LAYERS.lineStyle} />
          <Layer {...LAYERS.labelStyle} />
        </Source>

        <Source id="fill-source" type="geojson" data={LAYERS.fillData}>
          <Layer {...LAYERS.fillStyle} />
          <Layer {...LAYERS.labelStyle} />
        </Source>
      </Map>
    </div>
  );
}

export default MapBox;
