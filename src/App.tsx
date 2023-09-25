import { useEffect } from "react";
import "./App.css";
import { makeRequest } from "./services/api.service";
function App() {

  useEffect(()=>{
    const lat = 40.7128;
    const lon = -74.006;
    makeRequest(lat, lon).then((response: unknown) =>
      console.log({ response })
    );
    console.log(import.meta.env)
},[]);
  return <>hello</>;
}

export default App;
