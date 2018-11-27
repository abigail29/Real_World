import React from 'react'
import { Link } from 'react-router';


const NameComponent = (props) => {

  return (
    <div className="columns small-6 first" id="person-tile">
      <p>Name: {this.props.price}</p>
      <p>: {this.props.reason}</p>
      <p>Category: {this.props.category}</p>
    </div>

    )
  }

  export default NameComponent;
