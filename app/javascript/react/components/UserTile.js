import React from 'react'
import { Link } from 'react-router';


const UserTile = (props) => {

  return (
    <div key={props.id}>
      <a href={`/interests/${props.id}`}>
        <li>{props.email}</li>
      </a>
    </div>

    )
  }

  export default UserTile;
