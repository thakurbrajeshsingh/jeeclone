import React from "react";
import { makeStyles } from "@material-ui/core";

// Recat router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components 
import Navbar from './components/header/Navbar';
import FooterMain from './components/footer/Main';
import Register from "./components/register/Register";
import LandingPage from "./components/home/LandingPage";
const useStyle = makeStyles({

})




function App() {
  const classes = useStyle();
  return (
    <BrowserRouter>
      <Navbar />
    <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/register' component={Register} />
    <LandingPage />
    </Switch>
      {/* <FooterMain /> */}
    </BrowserRouter>

  );
}

export default App;
