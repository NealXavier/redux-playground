const initState = 0;

const reducer = (prevState = initState,{type,value}) => {
    switch(type){
        case "increment":
            return prevState + value;
        case "decrement":
            return prevState - value;
        case "incrementAsync":
            return prevState + value;
        default :
            return prevState;
    }
}
export default reducer;