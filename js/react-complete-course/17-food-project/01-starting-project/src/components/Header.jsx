import logoImage from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="logo"></img>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button className="button">Cart</button>
      </nav>
    </header>
  );
}
