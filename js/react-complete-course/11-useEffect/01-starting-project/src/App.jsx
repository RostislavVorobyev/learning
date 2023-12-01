import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

const selectedPlacesKey = "selectedPlaces";
const storedIds = JSON.parse(localStorage.getItem(selectedPlacesKey)) || [];
const storedPlaces = AVAILABLE_PLACES.filter((x) =>
  storedIds.find((id) => x.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [modalIsClosed, setModalIsClosed] = useState(true);

  //will be called in the end of first render and whenewer one of dependencies (2nd parameter) is updated.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      //needed, but not directly related to component itsels!
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsClosed(false);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsClosed(true);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem(selectedPlacesKey)) || [];
    if (storedIds.includes(id)) {
      localStorage.setItem(
        selectedPlacesKey,
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsClosed(true);

    const storedIds = JSON.parse(localStorage.getItem(selectedPlacesKey)) || [];
    localStorage.setItem = JSON.stringify(
      storedIds.filter((x) => x !== selectedPlace.current)
    );
  }, []);

  return (
    <>
      <Modal open={!modalIsClosed}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
