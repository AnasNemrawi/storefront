import product from "./productReducer";
import cart from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: { product, cart },
})
