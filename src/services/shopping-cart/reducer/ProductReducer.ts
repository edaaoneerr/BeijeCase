import { combineReducers } from "@reduxjs/toolkit";
import { ADD_TO_CART, 
  REMOVE_FROM_CART } from "../../../constants/Constants";
import { ProductState } from "../../../constants/interfaces/Interfaces";
import { ProductAction } from "../action/ProductAction";

export interface Cart {
  type: string;
  payload: {
    productName: ProductType;
    totalCount: number;
    totalPrice: number;
  };
}

export enum ProductType {
  SanitaryPad = 'sanitaryPad',
  SuperSanitaryPad = 'superSanitaryPad',
  SuperPlusSanitaryPad = 'superPlusSanitaryPad',
  Pantyliner = 'pantyliner',
  SuperPantyliner = 'superPantyliner',
  Tampon = 'tampon',
  MiniTampon = 'miniTampon'
}

export const initialState: ProductState = {
  totalCount: 0,
  totalPrice: 0,
  [ProductType.SanitaryPad]: {
    name: 'Standart Ped',
    productCount: 0,
    productPrice: 29.73,
  },
  [ProductType.SuperSanitaryPad]: {
    name: 'Süper Ped',
    productCount: 0,
    productPrice: 33.27,
  },
  [ProductType.SuperPlusSanitaryPad]: {
    name: 'Süper+ Ped',
    productCount: 0,
    productPrice: 37.48,
  },
  [ProductType.Pantyliner]: {
    name: 'Günlük Ped',
    productCount: 0,
    productPrice: 19.72,
  },
  [ProductType.SuperPantyliner]: {
    name: 'Süper Günlük Ped',
    productCount: 0,
    productPrice: 20.92,
  },
  [ProductType.MiniTampon]: {
    name: 'Mini Tampon',
    productCount: 0,
    productPrice: 33.77,
  },
  [ProductType.Tampon]: {
    name: 'Standart Tampon',
    productCount: 0,
    productPrice: 37.01,
  },

 
};



export const productReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { productName } = action.payload;
      const product = state[productName];
      const newProduct = {
        ...product,
        productCount: Math.max(0, product.productCount + 10),
      };
      const newTotalCount = Math.max(0, state.totalCount + newProduct.productCount);
      const newTotalPrice = Math.max(
        0,
        state.totalPrice + newProduct.productPrice
        
      );
      return {
        ...state,
        [productName]: newProduct,
        totalCount: newTotalCount,
        totalPrice: newTotalPrice,
      };
    }
    case REMOVE_FROM_CART: {
      const { productName } = action.payload;
      const product = state[productName];
      const newProduct = {
        ...product,
        productCount: Math.max(0, product.productCount - 10),
      };
      const newTotalCount = Math.max(0, newProduct.productCount);
      const newTotalPrice = Math.max(
        0,
        state.totalPrice - newProduct.productPrice
      );
      return {
        ...state,
        [productName]: newProduct,
        totalCount: newTotalCount,
        totalPrice: newTotalPrice,
      };
    }
    default:
      return state;
  }
}
