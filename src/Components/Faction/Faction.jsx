import React, {Component} from 'react';
import './Faction.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Faction extends Component {
    constructor() {
        super();

        this.state= {
         Faction: []
        }
    }
    componentDidMount() {
        axios.get(`/api/getFaction/${this.props.match.params.fac_id}`).then(res => {
            this.setState({Faction: res.data});
        });
    }
    render() {
        let displayFaction;
        displayFaction = this.state.Faction;
        return(
            <div>
                <Nav />
                <br />
                <div id='Faction-Container'>
                    {displayFaction.map((faction, i) => {
                        return(
                            <div key={i} className='Faction-Container'>
                                <div className='Faction-Title'>
                                    <h1>{faction.name}</h1>
                                </div>
                                <div className='Faction-Column'>
                                    <img src={faction.fac_image} alt='Faction' />
                                    <h4>{faction.founder}</h4>
                                </div>
                                <p>{faction.bio}</p>
                                <img src={faction.image} alt='Faction' />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Faction;