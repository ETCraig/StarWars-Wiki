import React, { Component } from 'react';
import './Characters.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Characters extends Component {
    constructor() {
        super();

        this.state = {
            Characters: []
        }
    }
    componentDidMount() {
        axios.get('/api/getCharacters').then(res => {
            this.setState({ Characters: res.data });
        });
    }
    render() {
        let displayCharacters;
        displayCharacters = this.state.Characters;
        return (
            <div>
                <Nav />
                <br />
                <div id='List-Container'>
                    {displayCharacters.map((Character, i) => {
                        return (
                            <div key={i} className='Routine-Exercises'>
                                <img src={Character.image} alt='Motion Pic' />
                                <h1>{Character.name}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Characters;