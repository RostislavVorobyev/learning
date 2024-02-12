import { Link, NavLink } from "react-router-dom";
import cssClasses from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={cssClasses.header}>
      <nav>
        <ul className={cssClasses.list}>
          <li>
            <NavLink
              className={(d) => {
                return d.isActive ? cssClasses.active : undefined;
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? cssClasses.active : undefined
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
