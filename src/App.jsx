import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import LogIn from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Layout from "./Layout/Layout";
import Products from "./Pages/Products/Products";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Profile from "./Pages/Profile/Profile";
import NotFound from "./Pages/notFound/NotFound";
import Cart from "./Pages/Cart/Card";
import Korzina from "./Pages/Korzina/Korzina";
import Allproduct from "./Pages/Allproduct/Allproduct";
import NewProduct from "./Pages/NewProduct/NewProduct";
import EditProduct from "./Pages/EditProduct/EditProduct";



function App()
{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/all",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "order",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "product",
          element: <Products />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "korzina",
          element:<Korzina/>
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "newProduct",
          element: <NewProduct />,
        }, {
          path: "editproduct",
          element:<EditProduct/>
        }
        
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
