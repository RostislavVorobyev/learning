import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const itemIndex = state.items.findIndex((item) => item === action.item.id);

    const updatedItems = [...state.items];
    if (itemIndex > -1) {
      updatedItems.push({ ...action.item, quantity: 1 });
    } else {
      const updatedExisting = {
        ...state.items[itemIndex],
        quantity: state.items[itemIndex].quantity + 1,
      };

      updatedItems.push(updatedExisting);
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [] = useReducer(cartReducer, { items: {} });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
