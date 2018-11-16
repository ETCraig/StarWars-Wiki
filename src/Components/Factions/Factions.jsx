import React, {Component} from 'react';
import './Factions.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Factions extends Component {
    constructor() {
        super();

        this.state = {
            Factions: []
        }
    }
    componentDidMount() {
        axios.get('/api/getFactions').then(res => {
            this.setState({Factions: res.data});
        });
    }   
    render() {
        let displayFactions;
        displayFactions = this.state.Factions;
        return(
            <div>
                <Nav />
                <br />
                <div id='Factions-Container'>
                    {displayFactions.map((Faction, i) => {
                            return (
                                <div key={i} className='Routine-Exercises'>
                                    <img src={Faction.image} alt='Motion Pic' />
                                    <h1>{Faction.name}</h1>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default Factions;