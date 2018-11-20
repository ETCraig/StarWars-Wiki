import React, {Component} from 'react';
import './Character.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Character extends Component {
    constructor() {
        super();

        this.state= {
            Character: []
        }
    }
    componentDidMount() {
        axios.get(`/api/getCharacter/${this.props.match.params.char_id}`).then(res => {
            this.setState({Character: res.data});
        });
    }
    render() {
        let displayCharacter;
        displayCharacter = this.state.Character;
        return(
            <div>
                <Nav />
                <br />
                <div id='Character-Container'>
                    {displayCharacter.map((character, i) => {
                        return(
                            <div key={i} className='Character-Container'>
                                <div className='Character-Title'>
                                    <h1>{character.name}</h1>
                                </div>
                                <div className='Character-Column'>
                                    <img src={character.image} alt='Character' className='Character-Character' />
                                    <h4>{character.faction}</h4>
                                    <img src={character.fac_img} alt='Character-Faction' />
                                    <h4>{character.side}</h4>
                                    <h4>{character.weapon}</h4>
                                    <img src={character.w_image} alt='Character-Weapon' />
                                    <h4>{character.power}</h4>
                                    <h4>{character.period}</h4>
                                    <img src={character.per_image} alt='Character-Period' />
                                    <h4>{character.apperances}</h4>
                                </div>
                                <p>{character.bio}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Character;