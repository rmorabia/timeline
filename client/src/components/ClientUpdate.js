import React from 'react'

const ClientUpdate = props => {
  return (
    <div className="event">
      <h2>Client Data Updated</h2>
      <p className="date">{props.formatDate(props.event.date)}</p>
    </div>
  )
}

export default ClientUpdate
