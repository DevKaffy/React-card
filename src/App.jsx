// import React from 'react'
import Card from './Component/Card'
import './App.css'
import {details} from '../data'


  function App(){
    return (
      <div>
    <div className='persons'>
    <h1 className='react'>React-Card Project</h1>
      {details.map((detail) => (
        <Card {...detail} />
      )
      )}
  </div>
  <div className='project'>React.js Examples Project Card</div>
      </div>
 
);
      }

  export default App;
