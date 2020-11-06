import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DataBox from './components/databox.js'
import NavBar from './components/NavBar.js'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Select from './components/Select';
import Footer from './components/Footer';
import '../src/App.css'
// import './App.css';

function App() {
  return (
    <div className = "App homepage-bgimage">
      <NavBar></NavBar>
      <br></br>
      <Select></Select>
      <br></br>
      <DataBox></DataBox>

      <br></br>
      <Router>
        <Route exact path='/' component={SignUp}>
        </Route>
        
        <Route exact path='/sign-in' component={SignIn}>
        </Route>
      </Router>
      <br></br>
      <br></br>
      <Footer>
      </Footer>

    </div>
  );
}
export default App;
