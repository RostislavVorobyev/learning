import { useContext } from "react";
import logoImage from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="logo"></img>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button className="button" textOnly>
          Cart (
          {cartCtx.items.reduce((total, item) => (total += item.quantity), 0)})
        </Button>
      </nav>
    </header>
  );
}
