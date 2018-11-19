import React, {Component} from 'react';
import './Home.css';

import Nav from '../NavBar/NavBar';

class Home extends Component {
    render() {
        return(
            <div className='Home-App'>
            <Nav />
                <div className='Home-Body'>
                    <div className="generic-block-wrapper">
                        <img src='https://images4.alphacoders.com/190/thumb-1920-19098.jpg' className='Home-Main-Img'/>
                        <div className='Home-Intro-Container'>
                            <h1 className='text-highlight-gradient-block'>A Galaxy that changed our own</h1>
                            <p id='Home-Prg'>From the first screening of STAR WARS in 1977 to the everyday fan video and post about its countless characters and planets, the Galaxy far far away has become an intricate part of cinema and pop culture.</p>
                        </div>
                    </div>
                    <div className='Home-Sec-Wrapper'>
                        <img src='https://www.hypable.com/wp-content/uploads/2015/08/star-wars-land-disney-world.jpg' className='Home-Sec-Img' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;