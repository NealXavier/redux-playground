import {INCREMENT,DECREMENT} from "./action-creator"

export const increment = value=>({ value,type:INCREMENT})
export const decrement = value=>({ value,type:DECREMENT})
export const incrementAsync = value=>({ value,type:INCREMENT})
