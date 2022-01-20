import React from "react";
import { makeStyles } from "@material-ui/core";

// React router
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import ContextProvider from './components/context/ContextProvider';



// components 
import Navbar from './components/header/Navbar';
import FooterMain from './components/footer/Main';
import Register from "./components/register/Register";
import LandingPage from "./components/home/LandingPage";
import Login from "./components/register/Login";
import Success from './components/register/Success';


const useStyle = makeStyles({

})




function App() {
  const classes = useStyle();
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <LandingPage />
        </Switch>
        {/* <FooterMain /> */}
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
