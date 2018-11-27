import React from 'react'
import { Link } from 'react-router';


const InterestTile = (props) => {

  return (
    <div key={props.id}>
      <ul>
        <li>{props.name}</li>
        <li>{props.description}</li>
        <li>{props.book}</li>
        <li>{props.location}</li>
        <li>{props.movie}</li>
        <li>{props.date}</li>
      </ul>
    </div>

    )
  }

  export default InterestTile;
