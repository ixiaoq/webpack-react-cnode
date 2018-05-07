import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import About from 'pages/About/About';


class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/about' component={About}/>
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}


export default RouterMap;