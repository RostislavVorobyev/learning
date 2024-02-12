import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <div>
      <p>Products</p>
      <ul>
        <li>
          <Link to={"/product/1"}>1</Link>
        </li>
        <li>
          <Link to={"/product/2"}>2</Link>
        </li>
        <li>
          <Link to={"/product/3"}>3</Link>
        </li>
      </ul>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
