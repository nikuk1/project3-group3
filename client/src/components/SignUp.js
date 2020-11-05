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
            email: '',
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

        axios.post('/api/users/', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
            alert("Thank you for signing up!");
          })
          .catch(function (error) {
            console.log(error);
          });

          this.setState({
            username: '',
            email: '',
            password: ''
        });
    }

    render() {
        return(
            <div align = "center">
                <form className=" form-box fields w-auto p-3 col-md-3" onSubmit={this.handleSubmit}>
                    <div className="field">
                    <label className="fieldLable" htmlFor="username">Username:</label>
                    <input type="text" id="username" className="formInput" placeholder="Be original!" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="field">
                    <label className="fieldLable" htmlFor="email">Email:</label>
                    <input type="email" id="email" className="formInput" placeholder="example@example.com" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="field">
                    <label className="fieldLable" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="formInput" placeholder="5 Character Min." name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div className="field">
                        <button type="submit" className="button mr-20">Submit</button> <Link to="/sign-in">Already a member?</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default signIn;