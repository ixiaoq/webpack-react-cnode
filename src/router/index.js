import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


import Home from '../components/Home';


class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Home}/>
                </Switch>
            </Router>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <RouterMap />
            </div>
        )
    }
}


export default hot(module)(App);