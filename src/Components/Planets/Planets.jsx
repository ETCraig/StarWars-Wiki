import React, {Component} from 'react';
import './Planets.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Planets extends Component {
    constructor() {
        super();

        this.state = {
            Planets: []
        }
    }
    componentDidMount() {
        axios.get('/api/getPlanets').then(res => {
            this.setState({Planets: res.data});
        });
    }   
    render() {
        let displayPlanets;
        displayPlanets = this.state.Planets;
        return(
            <div>
                <Nav />
                <br />
                <div id='Planets-Container'>
                <h1 className='Title'>Known Planets</h1>
                    <div className='Wrap'>
                        {displayPlanets.map((Planet, i) => {
                                return (
                                    <div key={i} className='Planets-Container'>
                                        <h2>{Planet.name}</h2>
                                        <img src={Planet.image} alt='Planets Pic' className='Planet' />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Planets;