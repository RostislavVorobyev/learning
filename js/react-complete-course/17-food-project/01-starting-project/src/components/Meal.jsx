import { useEffect } from "react";
import { currencyFormatter } from "../util/formatter";
import Button from "./UI/Button";

export default function Meal({ meal }) {
  return (
    <div id={meal.id} className="meal-item">
      <img src={`http://localhost:3000/${meal.image}`} alt="alt" />
      <h3 className="article">{meal.name}</h3>
      <div className="meal-item-price ">
        {currencyFormatter.format(meal.price)}
      </div>
      <div className="meal-item-description ">{meal.description}</div>
      <Button className="button">Add to cart</Button>
    </div>
  );
}
