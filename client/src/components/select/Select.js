import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select1 from './Select_1';
import '../../App.css';

function Select() {
console.log();
return (
<div className="row">
          {/* // Insert Card import here */}
<Select1/>
</div>
)
}
export default Select;


// -----------------------------------------------------------------------------------------------------------
// The starting div in this commented code, is in line with the div above
// -----------------------------------------------------------------------------------------------------------
//     <div class="row">
//         <div class="col-lg-3 col-md-12">
//             <h4>Search for a State:</h4>
//             <select name="states" id="option" class="search">
//                 <option value="" disabled selected>Select your option</option>
//                 <optgroup label="USA">
//                 <option value="Az">Arizona</option>
//                 <option value="Ca">California</option>
//               </optgroup>
//               <optgroup label="Europe">
//                 <option value="spain">Spain</option>
//                 <option value="italy">Italy</option>
//               </optgroup>
//             </select>
//             <ul class="list-group" id="history"></ul>
//         </div>
//         <div class="col-lg-9 col-md-12">
//         <div id="information"></div>
//         <h5 id="results"></h5>
//         <div class="d-flex flex-row justify-content-around align-items-center p-3 flex-wrap" id="data">
//         </div>
//         </div>
//     </div>
// -----------------------------------------------------------------------------------------------------------