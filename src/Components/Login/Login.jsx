import React, {Component} from 'react';
import './Login.css';

import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            btnDisable: true
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleRegisterRequest = this.handleRegisterRequest.bind(this);
    }
    handleNameChange(val) {
        this.setState({name: val});
    }
    handlePasswordChange(val) {
        this.setState({password: val});
    }
    handleLoginRequest() {
        console.log('Login Passed.');
        axios.post('/api/auth/login', {
            name: this.state.name,
            password: this.state.password
        }).then( data => {
            console.log('Data', data);
            this.props.history.push('/Home');
        }).catch(err => {
            alert('Profile not found.')
        });
    }
    handleRegisterRequest() {
        axios.post('/api/auth/register', {
            name: this.state.name,
            password: this.state.password
        }).then(data => {
            console.log('Data', data);
            this.props.history.push('/Home');
        }).catch(err => {
            alert('Credentials Are Unavailable.');
        });
    }
    render() {
        return(
            <div className='Login-App'>
                <div id="wrapper">
                    <div id="left">
                        <div id="signin">
                        <div className="logo">
                            <h1>STAR WARS Wiki</h1>
                        </div>
                        <form>
                            <div>
                            <label>Username</label>
                            <input type="text" className="text-input" onChange={(e) => this.handleNameChange(e.target.value)} />
                            </div>
                            <div>
                            <label>Password</label>
                            <input type="password" className="text-input" onChange={(e) => this.handlePasswordChange(e.target.value)} />
                            </div>
                            <button type="submit" className="primary-btn" onClick={this.handleLoginRequest}>Sign In</button>
                        </form>
                        <div className="links">
                            <a href="www.google.com">Forgot Password</a>
                        </div>
                        <div className="or">
                            <hr className="bar" />
                            <span>OR</span>
                            <hr className="bar" />
                        </div>
                        <a href="www.google.com" className="secondary-btn" onClick={this.handleRegisterRequest}>Create an account</a>
                        </div>
                        <footer id="main-footer">
                        <p>Copyright &copy; 2018, STAR WARS Wiki All Rights Reserved</p>
                        <div>
                            <a href="www.google.com">terms of use</a> | <a href="www.google.com">Privacy Policy</a>
                        </div>
                        </footer>
                    </div>
                    <div id="right">
                        <div id="showcase">
                        <div className="showcase-content">
                            <h1 className="showcase-text">
                            In a galaxy far far <strong>away </strong>... 
                            </h1>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;