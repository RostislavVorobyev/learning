import logoImage from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="logo"></img>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button className="button" textOnly>
          Cart (0)
        </Button>
      </nav>
    </header>
  );
}
