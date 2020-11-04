// import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import fetchData from '../API/fetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import * as React from 'react';
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


<CardDeck style={{display: 'flex', flexDirection: 'row'}} className = "container">
  <Card style={{flex: 1}} className = "card">
    <Card.Body>
      <Card.Title className = "card-header bg-dark text-light">Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card style={{flex: 1}} className = "card">
    <Card.Body>
      <Card.Title className = "card-header bg-dark text-light">Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card style={{flex: 1}} className = "card">
    <Card.Body>
      <Card.Title className = "card-header bg-dark text-light">Card title</Card.Title>
      <Card.Subtitle className = "badge badge-primary badge-pill">{addDateSuffix((item.date))}</Card.Subtitle>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
</CardDeck>



    // <Card key={item.data} style={{ width: '18rem'}}>
    //   <Card.Body className = "card">
    //     <Card.Title className ="card-header bg-dark text-light mb-2">Current Data</Card.Title>
    //     <Card.Subtitle className = "mb-2">Date {item.date}</Card.Subtitle>
    //     <br></br>
    //     <Card.Text>
          
    //       Positive cases: {item.positive}
    //       <br></br>
    //       Negative cases: {item.negative}
    //       <br></br>
    
    //     </Card.Text>
    //     {/* <Card.Link href="https://covidtracking.com/data">The Covid Tracking Project</Card.Link> */}
    //   </Card.Body>
    
    //   <Card.Body className = "card">
    //     {/* <Card.Title>Other Data</Card.Title> */}
    //     {/* <Card.Subtitle className="mb-2 text-muted">Date {item.date}</Card.Subtitle> */}
    //     <Card.Title className ="card-header bg-dark text-light mb-2">Current Data</Card.Title>
    //     <Card.Subtitle className = "mb-2">Date {item.date}</Card.Subtitle>
    //     <br></br>
    //     <Card.Text>
          
    //       Currently hospitalized: {item.hospitalizedCurrently}
    //       <br></br>
    //       Recovered: {item.recovered}
    //       <br></br>
    //       Deaths: {item.death}
    
    //     </Card.Text>
    //     <Card.Link href="https://covidtracking.com/data">The Covid Tracking Project</Card.Link>
    //   </Card.Body>
    
    
    // </Card> 
    ))}

    </div>

    
  );
}

export default DataBox;


{/* <div class="m-5 row justify-content-around">    
<div class="col-12 col-md-6 col-xl-3 mb-3">
  <div class="card">
    <h4 class="card-header bg-dark text-light">
      Testing 123
    </h4>
    <ul id="list-toDo" class="list-group list-group-flush">
      <li class="list-group-item">
        <span class="badge badge-primary badge-pill">
          Testing 123
        </span>
        <p class="m-1">
          Testing 123
        </p>
      </li>
    </ul>
  </div>
</div> */}