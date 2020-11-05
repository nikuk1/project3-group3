import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import fetchData from '../API/fetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import moment from 'moment';

// Function to format numbers
function numFormat(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

function DataBox() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
   fetchData().then(res => {
     setData(res.data)
   })
  },[])

  return (
    <div>
    {/* These are examples of producing the data */}
    {/* <code> {JSON.stringify(data, null, 2)} </code> */}
     {/* These are examples of producing the data */}
    {/* {data.map(item => (
        <li key={item.date}>
          <a href={item.url}> Date {moment(item.date.toString()).format('MMMM Do YYYY')}</a>
        </li>  
    ))}  */}
        {/* {data.map(item => (
        <li key={item.date}>
          <a href={item.url}> Date {numFormat(item.hospitalizedCurrently)}</a>
        </li>  
    ))} */}

{data.map(item => (
// Cards Start-------------------------------------------------------------------------------
<CardDeck style={{display: 'flex', flexDirection: 'row'}} className = "container">
{/* Card #1 1------------------------------------------------------------------------------- */}
<Card style={{flex: 1}} className = "card card-custom">
  <Card.Body>
    <Card.Title className = "card-header bg-dark text-light">Case Tracking</Card.Title>
    <Card.Subtitle className = "badge badge-primary badge-pill">{moment(item.date.toString()).format('MMMM Do YYYY')}</Card.Subtitle>
    <Card.Text>
    Total cases: {numFormat((item.positive))}
        <br></br>
    New Cases Today: {numFormat((item.positiveIncrease))}
        <br></br>
    Recovered: {numFormat((item.recovered))}
    </Card.Text>
    <Card.Footer>
    <button type="button" className="text-muted"
    onClick={(e) => {
    e.preventDefault();
    window.location.href='https://covidtracking.com/data';
    }}>The Covid Tracking Project</button>
    </Card.Footer>
  </Card.Body>
</Card>

{/* Card #2 1------------------------------------------------------------------------------- */}
<Card style={{flex: 1}} className = "card card-custom">
<Card.Body>
  <Card.Title className = "card-header bg-dark text-light">Hospitalization</Card.Title>
  <Card.Subtitle className = "badge badge-primary badge-pill">{moment(item.date.toString()).format('MMMM Do YYYY')}</Card.Subtitle>
  <Card.Text>
  Persons in Hospital: {numFormat((item.hospitalizedCurrently))}
        <br></br>
        Persons in ICU {numFormat((item.inIcuCurrently))}
        <br></br>
  Persons on Ventilator: {numFormat((item.onVentilatorCumulative))}
  </Card.Text>
  <Card.Footer>
  <button type="button" className="text-muted"
  onClick={(e) => {
  e.preventDefault();
  window.location.href='https://covidtracking.com/data';
  }}>The Covid Tracking Project</button>
  </Card.Footer>
</Card.Body>
</Card>

{/* Card #3 1------------------------------------------------------------------------------- */}
<Card style={{flex: 1}} className = "card card-custom">
<Card.Body>
  <Card.Title className = "card-header bg-dark text-light">Cases</Card.Title>
  <Card.Subtitle className = "badge badge-primary badge-pill">{moment(item.date.toString()).format('MMMM Do YYYY')}</Card.Subtitle>
  <Card.Text>
  Positive cases: {numFormat((item.positive))}
  <br></br>
  Negative cases: {numFormat((item.negative))}
  <br></br>
  Total tests: {numFormat((item.totalTestResults))}
  </Card.Text>
  <Card.Footer>
  <button type="button" className="text-muted"
  onClick={(e) => {
  e.preventDefault();
  window.location.href='https://covidtracking.com/data';
  }}>The Covid Tracking Project</button>
  </Card.Footer>
</Card.Body>
</Card>

{/* Card #4 1------------------------------------------------------------------------------- */}
<Card style={{flex: 1}} className = "card card-custom">
<Card.Body>
  <Card.Title className = "card-header bg-dark text-light">Outcomes</Card.Title>
  <Card.Subtitle className = "badge badge-primary badge-pill">{moment(item.date.toString()).format('MMMM Do YYYY')}</Card.Subtitle>
  <Card.Text>
  Recovered: {numFormat((item.recovered))} 
  <br></br>
  Deaths: {numFormat((item.death))}
  </Card.Text>
  <Card.Footer>
  <button type="button" className="text-muted"
  onClick={(e) => {
  e.preventDefault();
  window.location.href='https://covidtracking.com/data';
  }}>The Covid Tracking Project</button>
  </Card.Footer>
</Card.Body>
</Card>
</CardDeck>
    ))}
    </div>    
  );
}

export default DataBox;