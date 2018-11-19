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
                <div id='Characters-Container'>
                <h1 className='Title'>Characters</h1>
                    <div className='Characters-Wrap'>
                        {displayCharacters.map((Character, i) => {
                            return (
                                <div key={i} className='Characters-Container'>
                                    <h2>{Character.name}</h2>
                                    <img src={Character.image} alt='Character' className='Character' />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Characters;