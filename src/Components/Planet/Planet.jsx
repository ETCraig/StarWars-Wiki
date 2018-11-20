import React, {Component} from 'react';
import './Planet.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Planet extends Component {
    constructor() {
        super()

        this.state= {
            Planet: []
        }
    }
    componentDidMount() {
        axios.get(`/api/getPlanet/${this.props.match.params.plan_id}`).then(res => {
            this.setState({Planet: res.data});
        });
    }
    render() {
        let displayPlanet;
        displayPlanet = this.state.Planet;
        return(
            <div>
                <Nav />
                <br />
                <div id='Planet-Container'>
                    {displayPlanet.map((Planet, i) => {
                        return (
                            <div key={i} className='Planet-Container'>
                                <div className='Planet-Title'>
                                    <h1>{Planet.name}</h1>
                                </div>
                                <div className='Planet-Column'>
                                    <img src={Planet.image} alt='Planet' className='Planet-Planet' />
                                    <h4><strong>Faction:</strong> {Planet.faction}</h4>
                                    <img src={Planet.fac_image} alt='Faction' />
                                    <h4><strong>Natives:</strong> {Planet.naitives}</h4>
                                    <h4><strong>Location:</strong> {Planet.location}</h4>
                                </div>
                                <p>{Planet.bio}</p>
                            </div>
                        );
                    })}
                </div>            
            </div>
        );
    }
}

export default Planet;