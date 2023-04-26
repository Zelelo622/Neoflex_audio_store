import { CART_ROUTE, HOME_ROUTE } from "./utils/consts";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

export const routes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: CART_ROUTE,
    Component: CartPage,
  }
];
