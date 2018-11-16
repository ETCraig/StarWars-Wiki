import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Components
import Characters from './Components/Characters/Characters';
import Factions from './Components/Factions/Factions';
import Favorites from './Components/Favorites/Favorites';
import Focus from './Components/Focus/Focus';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Planets from './Components/Planets/Planets';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Ships from './Components/Ships/Ships';

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path='/Home' component={Home} />
        <Route path='/Profile' component={Profile} />
        <Route path='/Characters' component={Characters} />
        <Route path='/Factions' component={Factions} />
        <Route path='/Planets' component={Planets} />
        <Route path='/Ships' component={Ships} />
        <Route path='/Focus' component={Focus} />
        <Route path='/Favorites' component={Favorites} />
        <Route path='/Search' component={Search} />
    </Switch>
);