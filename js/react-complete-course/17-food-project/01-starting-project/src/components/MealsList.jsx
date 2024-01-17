import Meal from "./Meal.jsx";
import { useEffect, useState } from "react";
import { fetchData } from "../util/http.js";
import useHttp from "../hooks/useHttp.js";

export default function MealsList() {
  const requestConfig = { method: "GET" };
  const initialValue = [];

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, initialValue);

  console.log(loadedMeals);
  return (
    <div id="meals">
      {isLoading && <p>Fetching things. Please wait.</p>}
      {loadedMeals.map((x) => (
        <Meal key={x.id} meal={x} />
      ))}
    </div>
  );
}
