import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Details from './components/Details/Details';


export default(
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/menu" component={ Menu } />
        <Route path="/menu/:id" component={Details} />
    </Switch>
)