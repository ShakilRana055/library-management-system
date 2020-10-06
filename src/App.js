import React from 'react';
import './App.css';

import LoginPage from "./component/login/loginPage";
import configureStore from "./store/configureStore";
function App() {
  const store = configureStore();
  return (
    <LoginPage store = {store}></LoginPage>
  );
}

export default App;

