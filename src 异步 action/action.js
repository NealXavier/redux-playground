import {INCREMENT,DECREMENT} from "./action-creator"
import store from "./store";

export const Increment = value=>({ value,type:INCREMENT})
export const Decrement = value=>({ value,type:DECREMENT})

// 变成异步 action, 返回值变成 funtion 
export const IncrementAsync = (value,time)=> () =>{
        setTimeout(()=>{
            store.dispatch(Increment(value))
        },time)
    }
