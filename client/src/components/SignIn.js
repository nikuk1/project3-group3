import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class signIn extends Component {

    constructor () {
        super();
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.get('/api/users/:userId', {
            username: this.state.username,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
            alert("Welcome back!");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return(
            <div className="form">
                <form className="fields">
                    <div className="field">
                    <label className="fieldLable" htmlFor="username">Username:</label>
                    <input type="text" id="username" className="formInput" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="field">
                    <label className="fieldLable" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="formInput" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div className="field">
                        <button type="submit" className="button mr-20" onclick={this.handleSubmit}>Submit</button> <Link to="/">Sign Up!</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default signIn;