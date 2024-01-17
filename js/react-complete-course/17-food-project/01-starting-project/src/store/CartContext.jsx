import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  getCartTotal: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (itemIndex === -1) {
      updatedItems.push({ ...action.item, quantity: 1 });
    } else {
      updatedItems[itemIndex] = {
        ...state.items[itemIndex],
        quantity: state.items[itemIndex].quantity + 1,
      };
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updatedItems = [...state.items];
    const existingItem = state.items[updatedItemIndex];

    if (existingItem.quantity === 1) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems[updatedItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function getCartTotal() {
    return cart.items.reduce((total, i) => total + i.price * i.quantity, 0);
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    getCartTotal,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
