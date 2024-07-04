/**
 * count 组件
 */
import React from 'react';
export default class Count extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        count:1
    };

    increment(){
        this.setState({
            count: this.state.count + this.selectRef.value * 1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count - this.selectRef.value * 1
        })
    }

    incrementAsync(){
        setTimeout(()=>{
            this.setState({
                count: this.state.count + this.selectRef.value * 1
            })
        },500)
    }
    
    render(){
        return (
            <>
            <div style={{alignSelf:"flex-start"}}>最终结果为：{this.state.count}</div>
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