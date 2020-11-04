import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import fetchData from '../API/fetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import addDateSuffix from '../dateFormat';

function DataBox() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
   fetchData().then(res => {
     setData(res.data)
   })
  },[])

  return (
    <div>
     {/* <code> {JSON.stringify(data, null, 2)} </code> */}

     {/* These are examples of producing the data */}
     {/* {data.map(item => (
        <li key={item.states}>
          <a href={item.url}>Total States {item.states}</a>
        </li>  
      ))}

  {data.map(item => (
        <li key={item.date}>
          <a href={item.url}> Date {item.date}</a>
        </li>  
      ))} */}

{data.map(item => (

// Cards Start-------------------------------------------------------------------------------
<CardDeck style={{display: 'flex', flexDirection: 'row'}} className = "container">

{/* Card #1 1------------------------------------------------------------------------------- */}
<Card style={{flex: 1}} className = "card">
  <Card.Body>
    <Card.Title className = "card-header bg-dark text-light">Sample</Card.Title>
    <Card.Subtitle className = "badge badge-primary badge-pill">{addDateSuffix((item.date))}</Card.Subtitle>
    <Card.Text>
    This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.
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
<Card style={{flex: 1}} className = "card">
<Card.Body>
  <Card.Title className = "card-header bg-dark text-light">Sample</Card.Title>
  <Card.Subtitle className = "badge badge-primary badge-pill">{addDateSuffix((item.date))}</Card.Subtitle>
  <Card.Text>
  This is a wider card with supporting text below as a natural lead-in to
  additional content. This content is a little bit longer.
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
<Card style={{flex: 1}} className = "card">
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
<Card style={{flex: 1}} className = "card">
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