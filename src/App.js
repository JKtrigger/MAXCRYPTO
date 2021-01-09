import React from "react";
import { Route, BrowserRouter } from "react-router-dom"; //TODO delete redundant imports
 

import Header from "./Pages/Header";
import Footer from "./Pages/Footer";



import Home from "./Pages/Home/Home"; 
import Finance from "./Pages/Finance/Finance"; 
import Login from "./Pages/Login/Login"; 
import Mayfair from "./Pages/Mayfair/Mayfair"; 
import PasswordReset from "./Pages/PasswordReset/PasswordReset"; 
import {Logout} from "./Pages/Login/Login"; 
import "./App.css";

export let menuOptions = [
    {
        menuName: 'Home',
        menuLink: '/',
        source: Home
    },
    {
        menuName: 'Mayfair',
        menuLink: '/mayfair',
        source: Mayfair
        
    },
    {
        menuName: 'Password Reset',
        menuLink: '/PasswordReset',
        source: PasswordReset
    },  
    {
        menuName: 'Login',
        menuLink: '/login',
        source: Login
        
    },
    {
        menuName: 'Logout',
        menuLink: '/Logout',
        source: Logout
       
    },  
    {
        menuName: 'Finance',
        menuLink: '/finance',
        source: Finance
    }

];  // TODO ADD Prototypes and replace it to Menu.js 


class Pages extends React.Component{
    options = this.props.options;
    renderRoutes = () => {
        let routes = null
        
        routes = this.options.map(function (item, index) {
            return <Route key={index} exact path={item.menuLink} component={item.source} id={'page' + item.menuName}/>
        })
        return routes
    }

    render() {
        return (this.renderRoutes())
    }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <BrowserRouter>
                    <Header options={menuOptions}/>
                    <Pages options={menuOptions}/> 
                    <Footer/>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;