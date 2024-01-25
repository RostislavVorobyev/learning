import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { toggleCart } from "../../storage/storage";
import { useDispatch } from "react-redux";

const MainHeader = (props) => {
  const dispatcher = useDispatch();

  const onCartClick = () => {
    dispatcher(toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClickHandler={onCartClick} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
