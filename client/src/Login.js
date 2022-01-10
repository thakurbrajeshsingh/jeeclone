import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";

// Components 
// Login Page
// import LoginMain from "./components/login/LoginMain";
import Header from "./components/header/Header";
import Navbar from './components/header/Navbar';
// footer 
import Main from './components/footer/Main';




function Login() {
    return (
        <>
            <Header />
            <Navbar />
            <Main />

        </>
    )
}


export default Login;