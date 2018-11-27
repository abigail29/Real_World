import React from 'react'

const LocationField = props => {
  return(
    <label>
      Location:
      <input
        type="text"
        onChange={props.handleLocationChange}
        value={props.content}
        />
    </label>
  )

}

export default LocationField;
