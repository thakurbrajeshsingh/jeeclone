import React from "react";
import "./index.css";

import { makeStyles } from "@material-ui/core";


// React router
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import ContextProvider from './components/context/ContextProvider';

// components 
import Navbar from './components/header/Navbar';
import Register from "./components/register/Register";
import LandingPage from "./components/home/LandingPage";
import Login from "./components/register/Login";
import EductionDetails from './components/register/education/EducationDetails'
import Footer from './components/footer/Main'

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
          {/* <Route path='/register' component={Register} /> */}
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/education' component={EductionDetails} />
          <LandingPage />
        </Switch>
        {/* <FooterMain /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
