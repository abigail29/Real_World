import React from 'react'

const NameField = props => {
  return(
    <label>
      Name:
      <input
        type="text"
        onChange={props.handleNameChange}
        value={props.content}
        />
    </label>
  )

}

export default NameField;
