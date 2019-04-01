import React, { Component } from 'react'
import moment from 'moment'

import CaseAppt from './CaseAppt'
import ClientUpdate from './ClientUpdate'
import CourtDate from './CourtDate'
import Reminder from './Reminder'

class Timeline extends Component {
  formatDate(date) {
    return moment(date).format('MMMM Do, YYYY h:mm:ss A')
  }

  renderTimeline(e) {
    return e.map((event, index) => {
      switch(event.type) {
        case 'case-appt':
          return <CaseAppt
            event={event}
            formatDate={this.formatDate}
            key={event.date}
          />

        case 'client-update':
          return <ClientUpdate
            event={event}
            formatDate={this.formatDate}
            key={event.date}
          />

        case 'court-date':
          return <CourtDate
            event={event}
            formatDate={this.formatDate}
            key={event.date}
          />

        case 'reminder':
          return <Reminder
            event={event}
            formatDate={this.formatDate}
            key={event.date}
          />
      }
    })
  }


  render() {
    return (
      <div className="Timeline">
        {this.renderTimeline(this.props.futureEvents)}
        <div className="now" data-text="NOW"></div>
        {this.renderTimeline(this.props.pastEvents)}
      </div>
    )
  }
}

export default Timeline
