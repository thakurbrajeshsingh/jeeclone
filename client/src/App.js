import React from "react";
import { makeStyles } from "@material-ui/core";


// components 
import Navbar from './components/header/Navbar';
import MainL from "./components/mainContent/currentNews/MainL";
import MainR from "./components/rightSection/MainR";
import MainC from "./components/center/MainC";
import Main from './components/footer/Main';


const useStyle = makeStyles({

})




function App() {
  const classes = useStyle();
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      {/* Left Side */}
      <MainL />
      {/* Center side */}

      {/* Rigth Side */}
      <MainR />
      {/* Center  */}
      <MainC />

      {/* Footer */}
      <Main />

      {/* Login Page */}
      

    </div>

  );
}

export default App;
