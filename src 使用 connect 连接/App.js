import './App.css';
import Count from '../src/container/count';
import store from "./store"
import {Provider} from "react-redux"

function App() {
  return (
    <div className="App">
      {/* 为了防止多个组件同时需要 用到这个 store，以及节省 store.subscribe APi 这种用法
       于是提供了 Provider 这个父组件  */}
      {/* <Count store={store}/> */}
      <Provider store={store}>
        <Count />
      </Provider>
    </div>
  );
}

export default App;
