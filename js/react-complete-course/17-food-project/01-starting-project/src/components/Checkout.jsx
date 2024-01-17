import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatter";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import Input from "./UI/Input";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(e) {
    //prevent built-in form submition
    e.preventDefault();

    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: { name: customerData["full-name"], ...customerData },
        },
      }),
    });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      {/* hhtp request is sent with this automaticaly to development server. */}
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(cartCtx.getCartTotal())}</p>
        <Input label="Full Name" type="text" id="full-name"></Input>
        <Input label="Email" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code"></Input>
          <Input label="City" type="text" id="city"></Input>
        </div>

        <div className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button> Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
