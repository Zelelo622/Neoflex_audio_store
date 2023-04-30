export const addToFavourites = (product) => {
  const favouriteItems = JSON.parse(localStorage.getItem("favouriteItems")) || [];
  const existingProductIndex = favouriteItems.findIndex(
    (item) => item.title === product.title
  );
  if (existingProductIndex !== -1) {
    return;
  } else {
    favouriteItems.push({ ...product, quantity: 1 });
  }
  const totalQuantityFav = favouriteItems.reduce((acc, item) => acc + item.quantity, 0);
  localStorage.setItem("favouriteItems", JSON.stringify(favouriteItems));
  localStorage.setItem("totalQuantityFav", totalQuantityFav);
};


export const removeFromFavourite = (favouriteItems, productTitle) => {
  const deletedItem = favouriteItems.find(
    (item) => item.title === productTitle
  );
  const newFavouriteItems = favouriteItems.filter(
    (item) => item.title !== productTitle
  );
  const deletedQuantity = deletedItem.quantity;
  const totalQuantityFav =
    JSON.parse(localStorage.getItem("totalQuantityFav")) - deletedQuantity;
  localStorage.setItem("favouriteItems", JSON.stringify(newFavouriteItems));
  localStorage.setItem("totalQuantityFav", totalQuantityFav);
  return newFavouriteItems;
};
