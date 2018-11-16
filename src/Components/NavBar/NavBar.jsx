import React, { Component } from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';

class NaveBar extends Component {
    constructor() {
        super();

        this.state = {
            user: []
        }
    }
    render() {
        return (
            <div className='NavBar-App'>
                <div className='NavBar_Body'>
                    <h1>STAR WARS Wiki</h1>
                    <div className="container">
                        <input type="text" placeholder="Search..." />
                        <div className="search"></div>
                    </div>
                    <div id="nav">
                        <ul>
                            <Link to={`/Characters`} style={{textDecoration: 'none', color: '#ccc'}}><li className="Characters">Characters</li></Link>
                            <Link to={`/Factions`} style={{textDecoration: 'none', color: '#ccc'}}><li className="Factions">Factions</li></Link>
                            <Link to={`/Planets`} style={{textDecoration: 'none', color: '#ccc'}}><li className="Planets">Planets</li></Link>
                            {/* <Link to={`/Weapons`} style={{textDecoration: 'none', color: '#ccc'}}><li className="Weapons">Weapons</li></Link> */}
                            <Link to={`/Ships`} style={{textDecoration: 'none', color: '#ccc'}}><li className="Ships">Ships</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NaveBar;