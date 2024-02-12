import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

//custom action creator to handle side-effect code.
export function sendCartData(cart) {
  //postpone dispatch executor with thunk
  return async (dispatch) => {
    //do dirty things outside the reducer
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-demo-486f0-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Error on update.");
      }
    };

    // update status in other slice dispatching action from it
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    //send and async request and update another slice on fail
    try {
      await sendRequest();

      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success",
          message: "Job's done.",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Fail",
          message: "Failed to update state.",
        })
      );
    }

    // perform actual action
  };
}

export function fetchCartAction() {
  return async (dispatch) => {
    const fetchData = async function () {
      const response = await fetch(
        "https://react-demo-486f0-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) throw new Error("Cannot fetch cart");

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (er) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Fail",
          message: "Failed to fetch state.",
        })
      );
    }
  };
}
export const cartActions = cartSlice.actions;

export default cartSlice;
