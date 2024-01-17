import Header from "./components/Header";
import MealsList from "./components/MealsList";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <MealsList />
        <Cart />
        <Checkout />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
