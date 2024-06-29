import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  About,
  Error,
  Cart,
  Checkout,
  Orders,
  Products,
  SingleProduct,
  Login,
  Regitser,
} from "./pages";

//loader
import { loader as HomeLoader } from "./pages/Landing";
import { loader as ProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";

function App() {
  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: HomeLoader,
        },

        { path: "/about", element: <About /> },

        { path: "/cart", element: <Cart /> },

        { path: "/checkout", element: <Checkout /> },
        { path: "/orders", element: <Orders /> },
        {
          path: "/products",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
          loader: ProductLoader,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "register",
      element: <Regitser />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={Routes} />;
}

export default App;
