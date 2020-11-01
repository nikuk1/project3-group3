import DataBox_1 from './components/dataBox/DataBox';
import Select from './components/select/Select'
import NavBar from './components/NavBar';

// import DataGraph from './components/DataGraph';

import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// May not need these:
// import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css';
// FontAwesome
// Errored:------> import 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css';
// Errored:------> import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Staatliches&display=swap';
// Errored:------> import 'https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css';

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
  }, 
  [])
  // console.log(currentData[0].date);
  return (  
  <div>
      <header className="card-header p-3">
      {/* ? = then show data boxes
      if 0 will go to null */}
        {
          currentData.length ? 
          <>
          <NavBar/>
            </>
          : null
        }
      </header>
      <div className="container w-auto p-3">
      {/* // Insert Card import here */}
      {
          currentData.length ?
          <>
      <Select/>
            </>
          : null
        }
      </div>
      <main className="m-5 row justify-content-around">
        {
          currentData.length ?
          <>
            <DataBox_1 cases={currentData[0].date}/>          
            <DataBox_1/>
            <DataBox_1/>
            <DataBox_1/>
            </>
          : null
        }
      </main>
      <body className="m-5 row justify-content-around">
        {
          currentData.length ?
          <>
            <DataBox_1 cases={currentData[0].date}/>          
            <DataBox_1/>
            <DataBox_1/>
            <DataBox_1/>
            </>
          : null
        }
      </body>
  </div>
  );
}

export default App;
