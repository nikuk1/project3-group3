import styles from '../DataGraph.module.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function dataGraph(props) {
    return (
    <div>
            <h1 className="card-header p-3 bg-dark">
                Pandemic 2020 Dashboard
            </h1>
        <div>
            <h1 className={styles.boxTitle}>
            Current Cases                   
            </h1>
            <h2>
            Total cases: {props.cases}
            </h2>
            <p>
            Description (of some sort)
            </p>
        </div>
    </div>
)           
}
    export default dataGraph;
    
{/*     
    // /
    //         <h1 class="card-header p-3 bg-dark">Pandemic 2020 Dashboard</h1>
    
    // /
    //         <div class="container w-auto p-3">
    //             <div class="row">
    //                 <div class="col-lg-3 col-md-12">
    //                     <h4>Search for a State:</h4>
    //                     <select name="states" id="option" class="search">
    //                         <option value="" disabled selected>Select your option</option>
    //                         <optgroup label="USA">
    //                         <option value="Az">Arizona</option>
    //                         <option value="Ca">California</option>
    //                       </optgroup>
    //                       <optgroup label="Europe">
    //                         <option value="spain">Spain</option>
    //                         <option value="italy">Italy</option>
    //                       </optgroup>
    //                     </select>
    //                     <ul class="list-group" id="history"></ul>
    //                 </div>
    //                 <div class="col-lg-9 col-md-12">
    //                 <div id="information"></div>
    //                 <h5 id="results"></h5>
    //                 <div class="d-flex flex-row justify-content-around align-items-center p-3 flex-wrap" id="data">
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
     */}