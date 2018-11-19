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
                <h1 className='Title'>Main Factions</h1>
                    <div className='Factions-Wrap'>
                        {displayFactions.map((Faction, i) => {
                                return (
                                    <div key={i} className='Factions-Container'>
                                        <h2>{Faction.name}</h2>
                                        <img src={Faction.fac_image} alt='Faction' className='Faction' />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Factions;