import { useSelector , useDispatch } from 'react-redux';
import { testAction } from './action';
import React, { useState , useEffect } from 'react';


function App() {
  const dispatch = useDispatch()
  const [apiResult, setApiResult] = useState()
  const { testParam }  = useSelector(state => state)
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then( (result) => {
      setApiResult(result)
    },
    (error) => {
      console.log(error)
    })
  })


  return (
    <div className="App">
      <button onClick={()=>{ dispatch(testAction(testParam + 2)); apiResult['results'].map( map => console.log(map , 'hm'))  }}>+</button>
      <p style={{color:'black'}}> djole </p>
      {apiResult && <div>API</div> }

    </div>
  );
}

export default App;
