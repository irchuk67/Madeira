import React from "react";
import classes from './App.module.css';
import Header from "./Header/Header";

function App() {
  return (
    <div className={classes.main_wrapper}>
        <Header className={classes.headerwr}/>
    </div>
  );
}

export default App;
