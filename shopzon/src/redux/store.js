 import {configureStore} from "@reduxjs/toolkit"
import CategorySlice from "./CategorySlice"
import productSlice from './ProductSlice';
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        categories : CategorySlice,
        products: productSlice,
        carts:cartSlice
    },
})