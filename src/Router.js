import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Components
import Character from './Components/Character/Character';
import Characters from './Components/Characters/Characters';
import Faction from './Components/Faction/Faction';
import Factions from './Components/Factions/Factions';
import Favorites from './Components/Favorites/Favorites';
import Focus from './Components/Focus/Focus';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Planets from './Components/Planets/Planets';
import Planet from './Components/Planet/Planet';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Ship from './Components/Ship/Ship';
import Ships from './Components/Ships/Ships';

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path='/Home' component={Home} />
        <Route path='/Profile' component={Profile} />
        <Route path='/Characters' component={Characters} />
        <Route path='/Character/:char_id' component={Character} />
        <Route path='/Factions' component={Factions} />
        <Route path='/Faction/:fac_id' component={Faction} />
        <Route path='/Planets' component={Planets} />
        <Route path='/Planet/:plan_id' component={Planet} />
        <Route path='/Ships' component={Ships} />
        <Route path='/Ship/:ship_id' component={Ship} />
        <Route path='/Focus' component={Focus} />
        <Route path='/Favorites' component={Favorites} />
        <Route path='/Search' component={Search} />
    </Switch>
);