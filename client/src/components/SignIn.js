import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ('../App.css');

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

        axios.post(`/api/users/sign-in`, {
            username: this.state.username,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);

            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
              }
      
              //return response.data;
          })
      }

    render() {
        return(
            <div align = "center">
                <form className="form-box fields w-auto p-3 col-md-3" onSubmit={this.handleSubmit}>
                    <div className="field">
                    <label className="fieldLable" htmlFor="username">Username:</label>
                    <input type="text" id="username" className="formInput" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="field">
                    <label className="fieldLable" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="formInput" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div className="field">
                        <button type="submit" className="button mr-20" >Submit</button> <Link to="/">Sign Up!</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default signIn;