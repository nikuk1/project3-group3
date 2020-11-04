import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import fetchData from '../API/fetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import addDateSuffix from '../dateFormat';
// import covid from '../img/covid-19.png';

function DataBox() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
   fetchData().then(res => {
     setData(res.data)
   })
  },[])

// ----------------------------------------------------------------

// {{ backgroundImage:'url(${covid})'}}

// ----------------------------------------------------------------

  return (
    <div>
    {/* These are examples of producing the data */}
    <code> {JSON.stringify(data, null, 2)} </code>
     {/* These are examples of producing the data */}
    {data.map(item => (
      <li key={item.states}>
        <a href={item.url}>Total States {item.states}</a>
      </li>  
    ))}
    {data.map(item => (
        <li key={item.date}>
          <a href={item.url}> Date {item.date}</a>
        </li>  
    ))} 

{data.map(item => (
// Cards Start-------------------------------------------------------------------------------
<CardDeck style={{display: 'flex', flexDirection: 'row'}} className = "container-fluid homepage-bgimage">
{/* Card #1 1------------------------------------------------------------------------------- */}
<Card style={{flex: 1}} className = "card card-custom">
  <Card.Body>
    <Card.Title className = "card-header bg-dark text-light">Increases</Card.Title>
    <Card.Subtitle className = "badge badge-primary badge-pill">{addDateSuffix(item.date)}</Card.Subtitle>
    <Card.Text>
    Positive Increase: {item.positiveIncrease}
        <br></br>
        Negative Increase: {item.negativeIncrease}
        <br></br>
        Total Tests Increase: {item.totalTestResultsIncrease}
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
  <Card.Title className = "card-header bg-dark text-light">Other Increases</Card.Title>
  <Card.Subtitle className = "badge badge-primary badge-pill">{addDateSuffix((item.date))}</Card.Subtitle>
  <Card.Text>
  Hospital Increase: {item.hospitalizedIncrease}
        <br></br>
        Death Increase: {item.deathIncrease}
        <br></br>
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
  <Card.Subtitle className = "badge badge-primary badge-pill">{addDateSuffix((item.date))}</Card.Subtitle>
  <Card.Text>
  Positive cases: {item.positive}
  <br></br>
  Negative cases: {item.negative}
  <br></br>
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
  <Card.Title className = "card-header bg-dark text-light">Medical</Card.Title>
  <Card.Subtitle className = "badge badge-primary badge-pill">{addDateSuffix((item.date))}</Card.Subtitle>
  <Card.Text>
  Currently hospitalized: {item.hospitalizedCurrently}
  <br></br>
  Recovered: {item.recovered}
  <br></br>
  Deaths: {item.death}
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