/**
 * store 是中心 c 位，连接 reducer 和 Action
 */
/**
 * 
 */
import { createStore } from "redux";
import reducer from "./reducer";


const Store  = createStore(reducer);
export default Store;