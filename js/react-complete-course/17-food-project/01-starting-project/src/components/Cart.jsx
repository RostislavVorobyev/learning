import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatter";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.getCartTotal();

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleMoveToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" && handleCloseCart}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((x) => (
          <CartItem
            item={x}
            onIncrease={() => cartCtx.addItem(x)}
            onDecrease={() => cartCtx.removeItem(x.id)}
            key={x.id}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleMoveToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
