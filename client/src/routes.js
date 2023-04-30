import { CART_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE } from "./utils/consts";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";

export const routes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: CART_ROUTE,
    Component: CartPage,
  },
  {
    path: FAVOURITES_ROUTE,
    Component: FavouritesPage,
  }
];
