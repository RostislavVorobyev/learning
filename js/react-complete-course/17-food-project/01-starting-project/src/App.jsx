import { useEffect } from "react";
import Header from "./components/Header";
import { fetchData } from "./util/http";

function App() {
  let meals = [];

  useEffect(() => {
    async function fetchMeals() {
      const data = await fetchData("http://localhost:3000/meals");
      meals = data;
      console.log(meals);
    }

    fetchMeals();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
