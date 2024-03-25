import React, { useState, useEffect } from "react";
import Buscador from "./Buscador";

const MiApi = () => {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const response = await fetch(
          "https://api.boostr.cl/earthquakes/recent.json"
        );
        if (!response.ok) {
          throw new Error("Error fetching earthquakes");
        }
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setEarthquakes(data.data);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEarthquakes();
  }, []);

  return (
    <div>
      <Buscador data={earthquakes} />
    </div>
  );
};

export default MiApi;
