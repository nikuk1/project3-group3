import DataBox from './components/DataBox';
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
  const [ currentData, updateCurrentState ] = useState([]);
  
  useEffect(async ()=>{
    // console.log(data)
    const data = await fetchCurrentData();
    updateCurrentState(data)
  }, [])

// console.log(currentData[0].date);

  return (
    <div className="App">
      <header className="App-header">
        {
          // ? = then show data boxes
          // if 0 will go to null
          currentData.length ?
          <>
            <DataBox cases={currentData[0].date}/>          
            <DataBox/>
            <DataBox/>
            </>
          : null
        }
      </header>
    </div>
  );
}

export default App;
