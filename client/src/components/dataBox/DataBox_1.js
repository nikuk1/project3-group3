import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DataBox2 from './DataBox_2';
// import DataBox3 from './DataBox_3';

function dataBox1() {

  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {

    const result = await axios(
      'https://api.covidtracking.com/v1/us/current.json',
    );
 
    setData(result.data);
    
    return (
      <div class="card">
      <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
      </div> 
      )
      }
      export default dataBox1;

// -----------------------------------------------------------------------------------------------------------
// The starting div in this commented code, is in line with the div above
// -----------------------------------------------------------------------------------------------------------
/* 
<div class="card">
  <h4 class="card-header bg-dark text-light">
  </h4>
  <ul id="list-toDo" class="list-group list-group-flush">
    <li class="list-group-item">
      <span class="badge badge-primary badge-pill"></span>
      <p class="m-1"></p>
    </li>
  </ul>
</div> 
*/
// -----------------------------------------------------------------------------------------------------------