import React from 'react'

const MovieField = props => {
  return(
    <label>
      Movie:
      <input
        type="text"
        onChange={props.handleMovieChange}
        value={props.content}
        />
    </label>
  )

}

export default MovieField;
