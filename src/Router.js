import React from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import Favorites from './Components/Favorites/Favorites';
import Focus from './Components/Focus/Focus';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';

export default(
    <Switch>
        <Route exact path = "/" component = {Login} />
        <Route path = '/Home' component = {Home} />
        <Route path = '/Profile' component = {Profile} />
        <Route path = '/Focus' component = {Focus} />
        <Route path = '/Favorites' component = {Favorites} />
        <Route path = '/Search' component = {Search} />
    </Switch>
);