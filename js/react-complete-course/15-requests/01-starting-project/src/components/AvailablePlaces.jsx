import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const places = await fetchAvailablePlaces();
        console.log(places);
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const sortedPlacesByDistance = sortPlacesByDistance(
              places,
              pos.coords.latitude,
              pos.coords.longitude
            );

            setAvailablePlaces(sortedPlacesByDistance);
          },
          () => {}
        );
      } catch (error) {
        setError({ message: error.message || "Something went wrong!" });
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="aaaaa! error!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={places}
      fallbackText="No places available."
      loadingText="Fetching data..."
      isLoading={isLoading}
      onSelectPlace={onSelectPlace}
    />
  );
}
