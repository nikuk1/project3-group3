import React from 'react';
import fetchData from '../API/fetchData'


function DataBox() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {

   fetchData().then(res => {
     setData(res.data)
   })
  },[])

  return (
    <div className="data-box">
     <code> {JSON.stringify(data, null, 2)} </code>
     {data.map(item => (
        <li key={item.states}>
          <a href={item.url}>{item.states}</a>
        </li>  
      ))}

  {data.map(item => (
        <li key={item.date}>
          <a href={item.url}>{item.date}</a>
        </li>  
      ))}
    </div>
  );
}

export default DataBox;
