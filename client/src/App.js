import React from "react";
import {makeStyles } from "@material-ui/core";


// components 
import Header from "./components/header/Header";
import Navbar from './components/header/Navbar';
import MainL from "./components/mainContent/currentNews/MainL";
import MainR from "./components/rightSection/MainR";



const useStyle = makeStyles({

})




function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* Left Side */}
      <MainL />
      {/* Rigth Side */}
      <MainR />
    </div>

  );
}

export default App;
