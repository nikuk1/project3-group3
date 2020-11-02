import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class signUp extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify(this.setState),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    render() {
        return(
            <div className="form">
                <form className="fields" onSubmit={this.handleSubmit}>
                    <div className="field">
                    <label className="fieldLable" htmlFor="username">Username:</label>
                    <input type="text" id="username" className="formInput" placeholder="Please be thoughtful!" name="username" onChange={this.handleChange} />
                    </div>

                    <div className="field">
                    <label className="fieldLable" htmlFor="email">Email:</label>
                    <input type="email" id="email" className="formInput" placeholder="Must be real email" name="email" onChange={this.handleChange} />
                    </div>

                    <div className="field">
                    <label className="fieldLable" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="formInput" placeholder="5 character min." name="password" onChange={this.handleChange} />
                    </div>

                    <div className="field">
                        <button className="button mr-20">Sign Up</button> <Link to="/sign-in">Already a member?</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default signUp;