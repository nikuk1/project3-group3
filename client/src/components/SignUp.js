import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function signUp() {
    return(
        <div className="form">
            <form className="fields">
                <div className="field">
                <label className="fieldLable" htmlFor="username">Username:</label>
                <input type="text" id="username" className="formInput" placeholder="Please enter a username" name="username"/>
                </div>

                <div className="field">
                <label className="fieldLable" htmlFor="email">Email:</label>
                <input type="text" id="email" className="formInput" placeholder="Please enter your email" name="email"/>
                </div>

                <div className="field">
                <label className="fieldLable" htmlFor="password">Password:</label>
                <input type="text" id="password" className="formInput" placeholder="Password must be minimum of 5 characters" name="password"/>
                </div>

                <div className="field">
                    <button className="button mr-20">Sign Up</button> <Link to="/sign-in">Already a member?</Link>
                </div>
            </form>
        </div>
    )
}

export default signUp;