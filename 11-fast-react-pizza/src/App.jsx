import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu,{loader as menuLoader} from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order,{loader as OrderLoader} from "./features/order/Order";
import CreateOrder,{Action as createOrderAction} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error"
function App() {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          errorElement: <Error/>,
          loader:menuLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          errorElement:<Error/>,
          loader: OrderLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
