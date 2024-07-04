import {INCREMENT,DECREMENT} from "./action-creator"
// import store from "./store";

export const Increment = value=>({ value,type:INCREMENT})
export const Decrement = value=>({ value,type:DECREMENT})

// 变成异步 action, 返回值变成 function 
// 什么是 异步 action , 返回值 为 function, 就是 dispatch 开始的这个函数,
// 话说这个 dispatch 为什么会出现也非常狡猾，
// 就是 为了能给最终给真正的  同步 action "Increment" 一个 dispatch(传递动作)的机会，没得理解，只能死记 
export const IncrementAsync = (value,time) => 
    dispatch => {
        setTimeout(()=>{
            dispatch(Increment(value))
        },time)
    }
