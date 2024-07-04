/**
 * store 是中心 c 位，连接 reducer 和 Action
 */
/**
 * 
 */
import { createStore,applyMiddleware } from "redux";
import reducer from "./reducer";
import {thunk} from "redux-thunk";

const enhancer = applyMiddleware(thunk);
const Store  = createStore(reducer,enhancer);
export default Store;