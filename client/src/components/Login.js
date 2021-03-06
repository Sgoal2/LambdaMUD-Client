import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Route, Link } from 'react-router-dom';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
            
        }
    }
    changeInput = e => this.setState({ [e.target.name]: e.target.value });

    submitLogin = e => {
        e.preventDefault()
        const login = {
            username: this.state.username,
            password: this.state.password
            
        }
        const local = 'http://127.0.0.1:8000'
        const apiUrl = 'https://lam-mud-2.herokuapp.com'
        axios
            .post(`${apiUrl}/api/login`, login)
            .then(response => {
                sessionStorage.setItem('token', response.data.key)
                this.props.history.push('/game')
                console.log('logged in')
            })
            .catch(err => console.log(err.response))
        this.setState({ username: '', password: '' })
    }
    render() { 
        return (
            <form> 
             <input
          className="input"
          value={this.state.username}
          name="username"
          type="text"
          placeholder="username"
          onChange={this.changeInput}
        />
        <input
          className="input"
          value={this.state.password}
          name="password"
          type="password"
          placeholder="password"
          onChange={this.changeInput}
        />
        
        <button onClick={this.submitLogin}> Login</button>
        <Link to='/game' onClick={this.submitLogin}  >
                    Submit
                </Link>
            </form>
        );
    }
}


export default Login;