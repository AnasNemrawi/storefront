import { combineReducers, createStore, applyMiddleware } from "redux";
import product from "./productReducer";
import thunk from "redux-thunk";
import cart from "./cartReducer";
const reducers = combineReducers({ product, cart })

const store = () => {
	return createStore(reducers, applyMiddleware(thunk))
}

export default store();