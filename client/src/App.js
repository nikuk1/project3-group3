
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DataBoxAz from './components/databoxaz.js'
import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <DataBox></DataBox>
      <DataBoxAz></DataBoxAz>
    </div>
  );
}

export default App;
