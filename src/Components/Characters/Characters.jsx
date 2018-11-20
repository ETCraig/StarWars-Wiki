import React, { Component } from 'react';
import './Characters.css';

import axios from 'axios';
import {Link} from 'react-router-dom';
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
                                    <Link to={`/Character/${Character.char_id}`} style={{textDecoration:'none'}}><h2>{Character.name}</h2></Link>
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