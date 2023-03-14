import { ProductType } from "../../services/shopping-cart/reducer/ProductReducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";



export interface ProductState {
    totalPrice: number;
    totalCount: number;
    [ProductType.SanitaryPad]: {
      name: String;
      productCount: number;
      productPrice: number;
    };
    [ProductType.Pantyliner]: {
      name: String;
      productCount: number;
      productPrice: number;
    };
    [ProductType.SuperPantyliner]: {
      name: String;
      productCount: number;
      productPrice: number;
    };
    [ProductType.Tampon]: {
      name: String;
      productCount: number;
      productPrice: number;
    };
    [ProductType.SuperSanitaryPad]: {
      name: String;
      productCount: number;
      productPrice: number;
    };
    [ProductType.SuperPlusSanitaryPad]: {
      name: String;
      productCount: number;
      productPrice: number;
    };
    [ProductType.MiniTampon]: {
      name: String;
      productCount: number;
      productPrice: number;
    };

  }
  
  export interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: {
      productName: ProductType;
    };
  }
  
  export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: {
      productName: ProductType;
    };
  }
  
  
  