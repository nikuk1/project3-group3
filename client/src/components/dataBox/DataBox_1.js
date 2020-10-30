import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataBox2 from './DataBox_2';
import DataBox3 from './DataBox_3';

function dataBox1() {
console.log();
return (
<div class="card">
<DataBox2/>
<DataBox3/>
</div> 
)
}
export default dataBox1;

// -----------------------------------------------------------------------------------------------------------
// The starting div in this commented code, is in line with the div above
// -----------------------------------------------------------------------------------------------------------
{/* 
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
*/}
// -----------------------------------------------------------------------------------------------------------

