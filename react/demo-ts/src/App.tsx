import React from "react";
import Test from "./view/test";
import "./App.css";

const MyContext = React.createContext('')
function App() {
  return (
    <MyContext.Provider value='1998-12-17'>
      <Test name="ZhouYou" age={18}></Test>
    </MyContext.Provider>
  );
}

export  {App, MyContext};
