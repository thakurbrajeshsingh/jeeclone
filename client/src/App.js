import React from "react";



// components 
import Header from "./components/header/Header";
import Navbar from './components/header/Navbar';
import Main from "./components/mainContent/currentNews/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
    </div>

  );
}

export default App;
