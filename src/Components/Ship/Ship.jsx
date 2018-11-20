import React, {Component} from 'react';
import './Ship.css';

import axios from 'axios';
import Nav from '../NavBar/NavBar';

class Ship extends Component {
    constructor() {
        super();

        this.state= {
            Ship: []
        }
    }
    componentDidMount() {
        axios.get(`/api/getShip/${this.props.match.params.ship_id}`).then(res => {
            this.setState({Ship: res.data});
        });
    }
    render() {
        let displayShip;
        displayShip = this.state.Ship;
        return(
            <div>
                <Nav />
                <br />
                <div id='Ship-Container'>
                    {displayShip.map((ship, i) => {
                        return(
                            <div key={i} className="Ship-Container">
                                <div className='Ship-Title'>
                                    <h1>{ship.name}</h1>
                                </div>
                                <div className='Ship-Column'>
                                    <img src={ship.image} alt='Ship' />
                                    <h4>{ship.faction}</h4>
                                    <img src={ship.fac_image} alt='Ship-Faction' />
                                    <h4>{ship.pilot}</h4>
                                </div>
                                <p>{ship.bio}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Ship;