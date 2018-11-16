import React, {Component} from 'react';
import './Ships.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Ships extends Component {
    constructor() {
        super();

        this.state = {
            Ships: []
        }
    }
    componentDidMount() {
        axios.get('/api/getShips').then(res => {
            this.setState({Ships: res.data});
        });
    }   
    render() {
        let displayShips;
        displayShips = this.state.Ships;
        return(
            <div>
                <Nav />
                <br />
                <div id='Ships-Container'>
                    {displayShips.map((Ship, i) => {
                            return (
                                <div key={i} className='Routine-Exercises'>
                                    <img src={Ship.image} alt='Motion Pic' />
                                    <h1>{Ship.name}</h1>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default Ships;