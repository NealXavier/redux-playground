/**
 * count 组件
 */
import React from 'react';
import store  from "./store";
import { Increment,Decrement,IncrementAsync  } from "./action";
export default class Count extends React.Component{
    constructor(props){
        super(props);
    }

    increment(){
        store.dispatch(Increment(this.selectRef.value * 1))
    }

    decrement(){
        store.dispatch(Decrement(this.selectRef.value * 1))
    }

    incrementAsync() {
        store.dispatch(IncrementAsync(this.selectRef.value * 1,500))
    }
    
    render(){
        return (
            <>
            <div style={{alignSelf:"flex-start"}}>最终结果为：{store.getState()}</div>
            <div style={{display:"flex",width:"30%",justifyContent:"space-around",marginTop:30}}>
                <select name="1" id="123" ref={ref=>this.selectRef=ref}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment.bind(this)}>+</button>
                <button onClick={this.decrement.bind(this)}>-</button>
                <button onClick={this.incrementAsync.bind(this)}>异步+</button>
            </div>
            </>
        );
    }
}