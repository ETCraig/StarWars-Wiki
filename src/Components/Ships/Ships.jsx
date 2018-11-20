import React, {Component} from 'react';
import './Ships.css';

import axios from 'axios';
import {Link} from 'react-router-dom';
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
                <h1 className='Title'>Capital Ships</h1>
                    <div className='Ships-Wrap'>
                    {displayShips.map((Ship, i) => {
                            return (
                                <div key={i} className='Ships-Container'>
                                    <Link to={`/Ship/${Ship.ship_id}`} style={{textDecoration:'none'}}><h2>{Ship.name}</h2></Link>
                                    <img src={Ship.image} alt='Ships' className='Ship' />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Ships;