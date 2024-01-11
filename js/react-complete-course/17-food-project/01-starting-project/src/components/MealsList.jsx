import Meal from "./Meal.jsx";
import { useEffect, useState } from "react";
import { fetchData } from "../util/http.js";

export function MealsList() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      const data = await fetchData("http://localhost:3000/meals");
      setMeals(data);
      setIsLoading(false);
    }

    fetchMeals();
  }, []);

  return (
    <div id="meals">
      {isLoading && <p>Fetching things. Please wait.</p>}
      {meals.map((x) => (
        <Meal key={x.id} meal={x} />
      ))}
    </div>
  );
}
