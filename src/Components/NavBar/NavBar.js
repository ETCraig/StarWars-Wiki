import React, {Component} from 'react';
import './NavBar.css';

import {Link} from 'react-router-dom';

class NaveBar extends Component {
    render() {
        
        return(
            <div className='NavBar-App'>
                <div className='NavBar_Body'>
                    <h1>STAR WARS Wiki</h1>
                    <div class="container">
                        <input type="text" placeholder="Search..." />
                        <div class="search"></div>
                    </div>
                    <div class="select">
                        <select name="slct" id="slct">
                            <option>Choose a Category</option>
                            <option value="Characters">Characters</option>
                            <option value="Factions">Factions</option>
                            <option value="Planets">Planets</option>
                            <option value="Ships">Ships</option>
                            <option value="Weapons">Weapons</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default NaveBar;