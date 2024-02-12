import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { sendCartData, uiActions } from "./store/cart-slice.js";
import Notification from "./components/UI/Notification.jsx";
import { fetchCartAction } from "./store/cart-slice.js";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  //whenever staste is changed, rerender
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (!isInitial) {
      return;
    }

    dispatch(fetchCartAction());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = !isInitial;
      return;
    }

    dispatch(sendCartData(cart));
  }, [dispatch, cart]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;

// Fat components plan: useEffect to step-by-step update UI state and Cart state;
// useEffect(() => {
//   if (isInitial) {
//     isInitial = !isInitial;
//     return;
//   }

//   dispatch(
//     uiActions.setNotification({
//       status: "pending",
//       title: "Sending...",
//       message: "Sending cart data.",
//     })
//   );

//   sendCartData();

//   async function sendCartData() {
//     try {
//       const response = await fetch(
//         "https://react-demo-486f0-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Ваша корзина удалена.");
//       }

//       dispatch(
//         uiActions.setNotification({
//           status: "success",
//           title: "Success",
//           message: "Job's done.",
//         })
//       );

//       return await response.json();
//     } catch (er) {
//       dispatch(
//         uiActions.setNotification({
//           status: "error",
//           title: "Fail",
//           message: "Failed to update state.",
//         })
//       );
//     }
//   }
// }, [cart, dispatch]);
