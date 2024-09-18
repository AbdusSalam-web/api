import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductCard from "./componets/ProductCard";
import ProductDetails from "./componets/ProductDetails";

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<ProductCard />} />
      <Route path="/productDetails" element={<ProductDetails />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={route}/>
    </>
  );
}

export default App;
