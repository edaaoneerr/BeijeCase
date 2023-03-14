import { ProductType } from "../../services/shopping-cart/reducer/ProductReducer";
import Store from "../../services/Store";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";

  
export const addToCart = (productName: ProductType) => ({
  type: ADD_TO_CART,
  payload: { productName },
});

export const removeFromCart = (productName: ProductType) => ({
  type: REMOVE_FROM_CART,
  payload: { productName },
});


