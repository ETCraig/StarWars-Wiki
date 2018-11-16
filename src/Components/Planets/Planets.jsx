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
                    {displayPlanets.map((Planet, i) => {
                            return (
                                <div key={i} className='Routine-Exercises'>
                                    <img src={Planet.image} alt='Motion Pic' />
                                    <h1>{Planet.name}</h1>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default Planets;