import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DataBox from './components/databox.js'
import NavBar from './components/NavBar.js'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import './App.css';

<<<<<<< HEAD
 async function fetchCurrentData() {
// console.log("data called");
   const response = await axios.get("https://api.covidtracking.com/v1/us/current.json");
// console.log(response);
   return response.data;
 }
function App() {
 const [ currentData, updateCurrentState ] = useState([]);

  // another way?--
  // useEffect(() => {
  //   async function fetchCurrentData() {
  //     const data = await axios.get("https://api.covidtracking.com/v1/us/current.json")
  //   }
  //   fetchCurrentData();
  // },
  // end of idea---

  useEffect(async ()=>{
     const data = await fetchCurrentData();
     updateCurrentState(data)
     console.log(data)
   }, 
  []);
  //  console.log(currentData[0].date);
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
            <DataBox cases={currentData[0].date}/>   
            <DataBox/>
            <DataBox/>
            <DataBox/>
            </>
          : null
        }
      </main>
      <div className="m-5 row justify-content-around">
        {
          currentData.length ?
          <>
            <DataBox cases={currentData[0].date}/>          
            <DataBox/>
            <DataBox/>
            <DataBox/>
            </>
          : null
        }
      </div>
  </div>
=======
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <br></br>
      <DataBox></DataBox>

      <br></br>
      <Router>
        <Route exact path='/' component={SignUp}>
        </Route>
        
        <Route exact path='/sign-in' component={SignIn}>
        </Route>
      </Router>
    </div>
>>>>>>> Design
  );
}
export default App;
