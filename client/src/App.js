import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

async function fetchCurrentData() {
  // console.log("data called");
  const response = await axios.get("https://api.covidtracking.com/v1/us/current.json");
  // console.log(response);
  return response.data;
}

function App() {
  const [ currentData, updateCurrentState ] = useState({});
  
  useEffect(async ()=>{
    // console.log(data)
    const data = await fetchCurrentData();
    updateCurrentState(data)
  }, [])

  // console.log(currentData)
  
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
