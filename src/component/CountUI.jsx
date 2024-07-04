/**
 * count 组件
 */
import React from 'react';
export default class Count extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(">> props: ",this.props.realCount)
        return (
            <>
            <div style={{alignSelf:"flex-start"}}>最终结果为：{this.props.realCount}</div>
            <div style={{display:"flex",width:"30%",justifyContent:"space-around",marginTop:30}}>
                <select name="1" id="123" ref={ref=>this.selectRef=ref}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={()=>this.props.jia(this.selectRef.value * 1)}>+</button>
                <button onClick={()=>this.props.jian(this.selectRef.value * 1)}>-</button>
                <button onClick={()=>this.props.jiaAsync(this.selectRef.value * 1,500)}>异步+</button>
            </div>
            </>
        );
    }
}
