import React, {Component} from 'react';
import './Factions.css';

import axios from 'axios';
import {Link} from 'react-router-dom';
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
                                        <Link to={`/Faction/${Faction.fac_id}`} style={{textDecoration:'none'}}><h2>{Faction.name}</h2></Link>
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