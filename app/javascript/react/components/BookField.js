import React from 'react'

const BookField = props => {
  return(
    <label>
      Book:
      <input
        type="text"
        onChange={props.handleBookChange}
        value={props.content}
        />
    </label>
  )

}

export default BookField;
