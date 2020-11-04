import React from 'react';
import Card from 'react-bootstrap/Card';
import fetchData from '../API/fetchData';
import Col from 'react-bootstrap/Col';


function DataBox() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {

   fetchData().then(res => {
     setData(res.data)
   })
  },[])

  return (
    <div className="data-box row">
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

      <Col xs={3}>

{data.map(item => (
    <Card key={item.data} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Current Data</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date {item.date}</Card.Subtitle>
        <br></br>
        <Card.Text>
          
          Positive cases: {item.positive}
          <br></br>
          Negative cases: {item.negative}
          <br></br>
    
        </Card.Text>
        {/* <Card.Link href="https://covidtracking.com/data">The Covid Tracking Project</Card.Link> */}
      </Card.Body>
    
      <Card.Body>
        {/* <Card.Title>Other Data</Card.Title> */}
        {/* <Card.Subtitle className="mb-2 text-muted">Date {item.date}</Card.Subtitle> */}
        <Card.Text>
          
          Currently hospitalized: {item.hospitalizedCurrently}
          <br></br>
          Recovered: {item.recovered}
          <br></br>
          Deaths: {item.death}
    
        </Card.Text>
        <Card.Link href="https://covidtracking.com/data">The Covid Tracking Project</Card.Link>
      </Card.Body>
    
    
    </Card> ))}
    </Col>

    <Col xs={3}>

{data.map(item => (
    <Card key={item.data} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Current Data</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date {item.date}</Card.Subtitle>
        <br></br>
        <Card.Text>
          
          Positive Increase: {item.positiveIncrease}
          <br></br>
          Negative Increase: {item.negativeIncrease}
          <br></br>
          Total Tests Increase: {item.totalTestResultsIncrease}
    
        </Card.Text>
        {/* <Card.Link href="https://covidtracking.com/data">The Covid Tracking Project</Card.Link> */}
      </Card.Body>
    
      <Card.Body>
        {/* <Card.Title>Other Data</Card.Title> */}
        {/* <Card.Subtitle className="mb-2 text-muted">Date {item.date}</Card.Subtitle> */}
        <Card.Text>
          
          Hospital Increase: {item.hospitalizedIncrease}
          <br></br>
          Death Increase: {item.deathIncrease}
          <br></br>
    
        </Card.Text>
        <Card.Link href="https://covidtracking.com/data">The Covid Tracking Project</Card.Link>
      </Card.Body>
    
    
    </Card> ))}
    </Col>

    </div>
  );
}

export default DataBox;

