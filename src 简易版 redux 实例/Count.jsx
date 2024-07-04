/**
 * count 组件
 */
import React from 'react';
import store  from "./store";
export default class Count extends React.Component{
    constructor(props){
        super(props);
    }
    // state = {
    //     count: 1
    // };

    componentDidMount(){
        store.subscribe(()=>{
            // this.forceUpdate() 会触发渲染
            this.setState({}) // 会触发渲染
            // this.render()  不会触发渲染
        }).bind(this)
    }

    increment(){
        store.dispatch({
            type:"increment",
            value:this.selectRef.value * 1
        })
    }

    decrement(){
        store.dispatch({
            type:"decrement",
            value:this.selectRef.value * 1
        })
    }

    incrementAsync(){

        setTimeout(()=>{
            store.dispatch({
                type:"incrementAsync",
                value:this.selectRef.value * 1
            })
        },500)
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