import React from 'react'
import { useParams } from 'react-router-dom'


function Restview() {
    const params=useParams()
    console.log(params.id);
  return (
    <div>
        <h1>Restview</h1>
    </div>
  )
}

export default Restview