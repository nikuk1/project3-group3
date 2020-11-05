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


<div align = "center">
        <div className="w-auto p-3 select-box col-md-3">
                <div>
                <h4>
                    *Search by State:
                </h4>                
                    <a href="https://covidtracking.com/data#state-al">AL    </a>
                    <a href="https://covidtracking.com/data#state-ak">AK    </a>
                    <a href="https://covidtracking.com/data#state-as">AS    </a>
                    <a href="https://covidtracking.com/data#state-az">AZ    </a>
                    <a href="https://covidtracking.com/data#state-ar">AR    </a>
                    <a href="https://covidtracking.com/data#state-ca">CA    </a>
                    <a href="https://covidtracking.com/data#state-co">CO    </a>
                    <a href="https://covidtracking.com/data#state-ct">CT    </a>
                    <br></br> 

                    <a href="https://covidtracking.com/data#state-de">DE    </a>
                    <a href="https://covidtracking.com/data#state-dc">DC    </a>
                    <a href="https://covidtracking.com/data#state-fl">FL    </a>
                    <a href="https://covidtracking.com/data#state-ga">GA    </a>
                    <a href="https://covidtracking.com/data#state-gu">GU    </a>
                    <a href="https://covidtracking.com/data#state-hi">HI    </a>
                    <a href="https://covidtracking.com/data#state-id">ID    </a>
                    <a href="https://covidtracking.com/data#state-il">IL    </a>
                    <a href="https://covidtracking.com/data#state-in">IN    </a>
                    <br></br> 
                    <a href="https://covidtracking.com/data#state-ia">IA    </a>
                    <a href="https://covidtracking.com/data#state-ks">KS    </a>
                    <a href="https://covidtracking.com/data#state-ky">KY    </a>
                    <a href="https://covidtracking.com/data#state-la">LA    </a>
                    <a href="https://covidtracking.com/data#state-me">ME    </a>
                    <a href="https://covidtracking.com/data#state-md">MD    </a>
                    <a href="https://covidtracking.com/data#state-ma">MA    </a>
                    <a href="https://covidtracking.com/data#state-mi">MI    </a>
                    <br></br> 
                    <a href="https://covidtracking.com/data#state-mn">MN    </a>
                    <a href="https://covidtracking.com/data#state-ms">MS    </a>
                    <a href="https://covidtracking.com/data#state-mo">MO    </a>
                    <a href="https://covidtracking.com/data#state-mt">MT    </a>
                    <a href="https://covidtracking.com/data#state-ne">NE    </a>
                    <a href="https://covidtracking.com/data#state-nv">NV    </a>
                    <a href="https://covidtracking.com/data#state-nh">NH    </a>
                    <br></br> 
                    <a href="https://covidtracking.com/data#state-nj">NJ    </a>
                    <a href="https://covidtracking.com/data#state-nm">NM    </a>
                    <a href="https://covidtracking.com/data#state-ny">NY    </a>
                    <a href="https://covidtracking.com/data#state-nc">NC    </a>
                    <a href="https://covidtracking.com/data#state-nd">ND    </a>
                    <a href="https://covidtracking.com/data#state-mp">MP    </a>
                    <a href="https://covidtracking.com/data#state-oh">OH    </a>
                    <a href="https://covidtracking.com/data#state-ok">OK    </a>
                    <br></br>
                    <a href="https://covidtracking.com/data#state-or">OR    </a>
                    <a href="https://covidtracking.com/data#state-pa">PA    </a>
                    <a href="https://covidtracking.com/data#state-pr">PR    </a>
                    <a href="https://covidtracking.com/data#state-ri">RI    </a>
                    <a href="https://covidtracking.com/data#state-sc">SC    </a>
                    <a href="https://covidtracking.com/data#state-sd">SD    </a>
                    <a href="https://covidtracking.com/data#state-tn">TN    </a>
                    <a href="https://covidtracking.com/data#state-tx">TX    </a>
                    <br></br> 
                    <a href="https://covidtracking.com/data#state-vi">VI    </a>
                    <a href="https://covidtracking.com/data#state-ut">UT    </a>
                    <a href="https://covidtracking.com/data#state-vt">VT    </a>
                    <a href="https://covidtracking.com/data#state-va">VA    </a>
                    <a href="https://covidtracking.com/data#state-wa">WA    </a>
                    <a href="https://covidtracking.com/data#state-wv">WV    </a>
                    <a href="https://covidtracking.com/data#state-wi">WI    </a>
                    <a href="https://covidtracking.com/data#state-wy">WY    </a>
                    <br></br> 
                    <small>*This will link to an external site</small>
                </div>
                {/* <div className="col-lg-9 col-md-12">
                <div id="information"></div>
                <h5 id="results"></h5>
                <div className="d-flex flex-row justify-content-around align-items-center p-3 flex-wrap" id="data">
                </div>
                </div> */}
        </div>
        
        </div>
    );
}

    export default Select; 