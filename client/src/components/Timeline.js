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
      if (event.type === 'case-appt') {
        return <CaseAppt
                  event={event}
                  date={this.formatDate}
                />
      } else if (event.type === 'client-update') {
        return <ClientUpdate
                  event={event}
                  date={this.formatDate}
                />
      } else if (event.type === 'court-date') {
        return <CourtDate
                  event={event}
                  date={this.formatDate}
                />
      } else if (event.type === 'reminder') {
        return <Reminder
                  event={event}
                  date={this.formatDate}
                />
      }
    })
  }


  render() {
    return (
      <div className="Timeline">
        {this.renderTimeline(this.props.futureEvents)}
        <div class="now" data-text="NOW"></div>
        {this.renderTimeline(this.props.pastEvents)}
      </div>
    )
  }
}

export default Timeline
