import React from 'react'

const MovieUpdate = props => {
  return (
    <div className="event">
      <h2>Movie Data Updated</h2>
      <p className="date">{props.formatDate(props.event.date)}</p>
    </div>
  )
}

export default MovieUpdate
