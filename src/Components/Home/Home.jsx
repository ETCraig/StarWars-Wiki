import React, {Component} from 'react';
import './Home.css';

import Nav from '../NavBar/NavBar';

class Home extends Component {
    render() {
        return(
            <div className='Home-App'>
            <Nav />
                <div className='Home-Body'>

                </div>
            </div>
        );
    }
}

export default Home;