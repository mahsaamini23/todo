import React from 'react';
import './App.css';
// import { RouterProvider } from 'react-router-dom';
// import router from './route/route';
import Home from './page/Home/Home';
import {Provider} from 'react-redux';
import {store} from "./component/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
