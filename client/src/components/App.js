import React, { Component } from 'react'
import axios from 'axios'

import Timeline from './Timeline'
import NewEvent from './NewEvent'

class App extends Component {
  state = {
    pastEvents: [],
    futureEvents: []
  }

  splitList (events) {
    return events.map((event) => {
      const currentDate = new Date()
      const eventDate = new Date(event.date)
      if (eventDate < currentDate) {
        this.setState({
          pastEvents: this.state.pastEvents.concat(event)
        })
      } else {
        this.setState({
          futureEvents: this.state.futureEvents.concat(event)
        })
      }
    })
  }

  componentDidMount() {
    axios.get('api')
      .then(res=> res.data.sort(
        function (a, b) {
          return new Date(b.date) - new Date(a.date)
        })
      )
      .then(res => this.splitList(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Promise Timeline App</h1>
        <NewEvent />
          <Timeline
            pastEvents={this.state.pastEvents}
            futureEvents={this.state.futureEvents}
          />
      </div>
    )
  }
}

export default App
