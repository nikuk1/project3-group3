import fetchStateData from '../API/fetchStateData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';

function Select() {

    const [states, setData] = React.useState([])
    React.useEffect(() => {
     fetchStateData().then(res => {
       setData(res.states)
     })
    },[])
  
    return (

        <div className="container w-auto p-3">
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <h4>Search for a State:</h4>
                    <select name="states" id="option" className="search">
                        <option value="" disabled selected>Select your option</option>
                        <optgroup label="USA">
                        <option value="az">Arizona</option>
                        <option value="ca">California</option>
                      </optgroup>
                      <optgroup label="Europe">
                        <option value="spain">Spain</option>
                        <option value="italy">Italy</option>
                      </optgroup>
                    </select>
                    <ul class="list-group" id="history"></ul>
                </div>
                <div className="col-lg-9 col-md-12">
                <div id="information"></div>
                <h5 id="results"></h5>
                <div className="d-flex flex-row justify-content-around align-items-center p-3 flex-wrap" id="data">
                </div>
                </div>
            </div>
        </div>
    );
}

    export default Select; 