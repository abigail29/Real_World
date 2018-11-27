import React from 'react'

const DateField = props => {
  return(
    <label>
      Date:
      <input
        type="date"
        onChange={props.handleDateChange}
        value={props.content}
        />
    </label>
  )

}

export default DateField;
