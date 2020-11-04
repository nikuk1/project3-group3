import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DataBox from './components/databox.js'
import NavBar from './components/NavBar.js'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <br></br>
      <DataBox></DataBox>

      <Router>
        <Route exact path='/' component={SignUp}>
        </Route>
        
        <Route exact path='/sign-in' component={SignIn}>
        </Route>
      </Router>
    </div>
  );
}
export default App;
