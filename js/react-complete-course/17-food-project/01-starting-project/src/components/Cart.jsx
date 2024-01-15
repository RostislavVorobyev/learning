import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatter";
import Button from "./UI/Button";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.reduce(
    (total, i) => total + item.quantity * item.price,
    0
  );

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((x) => (
          <li key={x.id}>
            {x.name} - {x.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
