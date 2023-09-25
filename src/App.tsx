import { useEffect } from "react";
import "./App.css";
import { getWeatherByCoords } from "./services/api.service";
function App() {

  useEffect(()=>{
    const lat = 40.7128;
    const lon = -74.006;
    getWeatherByCoords(lat, lon).then((response: unknown) =>
      console.log({ response })
    );
},[]);
  return <>hello</>;
}

export default App;
