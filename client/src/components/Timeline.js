import React, { Component } from 'react'
import moment from 'moment'

import CallMom from './CallMom'
import MovieUpdate from './MovieUpdate'
import Movie from './Movie'
import Reminder from './Reminder'

class Timeline extends Component {
  formatDate(date) {
    return moment(date).format('MMMM Do, YYYY h:mm:ss A')
  }

  renderTimeline(e) {
    return e.map((event, index) => {
      switch(event.type) {
        case 'call-mom':
          return <CallMom
            event={event}
            formatDate={this.formatDate}
            key={event.date}
          />

        case 'movie-update':
          return <MovieUpdate
            event={event}
            formatDate={this.formatDate}
            key={event.date}
          />

        case 'movie':
          return <Movie
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
