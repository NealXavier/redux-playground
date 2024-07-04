// import CountUI from "../component/CountUI";
import { connect } from "react-redux";
import React from 'react';
import {Increment,Decrement,IncrementAsync} from "../action"
// import reducer from "../reducer";

// react-redux 连接 redux 和 容器组件
// 

// function mapState(state){
//     return {
//         realCount: state 
//     }
// }

// function a(props){
//     return {
//         realCount: props.store // 获取不到值，store 里面的值直接存储在 props
//     }
// }

// 定义一个函数 
// 返回值 一个对象; 以 属性为 key, dispatch 传递操作的函数 为 value 
function mapProp(){
    // return {
    //     jia: value => dispatch(Increment(value)),
    //     jian: value => dispatch(Decrement(value)),
    //     jiaAsync: (value,time) => dispatch(IncrementAsync(value,time))
    // }
    // 居然还有以下的写法，可以简单的理解成约分，其实是 react-redux 做的简化
    // 但是如果直接以对象{}的方式写在第二个参数可以,
    // 但是以 mapProp 的身份就不行;
    return {
        jia: Increment,
        jian: Decrement,
        jiaAsync: IncrementAsync
    }
}

export default connect(state=>({
    realCount:state
}),{
    jia: Increment,
    jian: Decrement,
    jiaAsync: IncrementAsync
})(class Count extends React.Component{
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
});

// connect 第二个参数如果我写成 mapProp 返回简写的情况，还不生效

