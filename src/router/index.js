import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';


class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <RouterMap />
            </React.Fragment>
        )
    }
}


export default hot(module)(App);