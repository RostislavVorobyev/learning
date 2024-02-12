import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import RootLayout from "./pages/Root";
import ErrorMessage from "./pages/ErrorMessage";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
      { path: "product/:productId", element: <Product /> },
    ],
    errorElement: <ErrorMessage />,
  },
]);

//can be also configured with jsx-definition
// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/products" element={<ProductList />}></Route>
//   </Route>
// );

// const router = createBrowserRouter(routerDefinition);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
