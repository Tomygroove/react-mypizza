import React from 'react';

import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';

import Login from '../screens/login'
import Home from '../screens/home'
import Pizzas from '../screens/pizzas'
import Pizza from '../screens/pizza'
import Configurator from '../screens/configurator'
import Cart from '../screens/cart'
import PrivateRoute from "../utils/privateRoute";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/pizzas" component={Pizzas} />
                <PrivateRoute path="/pizza" component={Pizza} />
                <PrivateRoute path="/configurator" component={Configurator} />
                <PrivateRoute path="/cart" component={Cart} />
                <Redirect to="/home" ></Redirect>
            </Switch>
        </Router>
    );
};

export default Routes;