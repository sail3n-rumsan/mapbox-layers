import { useState } from "react";
import MapGL, {
  Source,
  Layer,
  NavigationControl,
  FullscreenControl,
} from "@urbica/react-map-gl";
import Draw from "@urbica/react-map-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "mapbox-gl/dist/mapbox-gl.css";
import LAYERS from "../layers";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAP_STYLE = import.meta.env.VITE_MAP_STYLE;

function MapBox() {
  const [viewport, setViewport] = useState({
    latitude: 27.7172,
    longitude: 85.324,
    zoom: 2,
  });
  const [_, setFeatures] = useState([]);

  return (
    <div style={{ width: "100%" }}>
      <MapGL
        style={{ width: "75vw", height: "80vh" }}
        mapStyle={`mapbox://${MAP_STYLE}`}
        accessToken={MAPBOX_TOKEN}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
      >
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <Source id="pointData" type="geojson" data={LAYERS.pointData}>
          <Layer id="pointData" source="pointData" {...LAYERS.pointStyle} />
        </Source>
        <Source id="lineData" type="geojson" data={LAYERS.lineData}>
          <Layer id="lineData" source="lineData" {...LAYERS.lineStyle} />
        </Source>
        <Source id="fillData" type="geojson" data={LAYERS.fillData}>
          <Layer id="fillData" source="fillData" {...LAYERS.fillStyle} />
        </Source>

        <Draw
          position="top-left"
          combineFeaturesControl={false}
          uncombineFeaturesControl={false}
          onDrawCreate={({ features }) => setFeatures({ features })}
          onDrawUpdate={({ features }) => setFeatures({ features })}
        />
      </MapGL>
    </div>
  );
}

export default MapBox;
