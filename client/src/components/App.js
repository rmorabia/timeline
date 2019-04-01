import React, { Component } from 'react'
import axios from 'axios'

import Timeline from './Timeline'
import NewEvent from './NewEvent'

class App extends Component {
  state = {
    isLoading: true,
    axiosError: false,
    pastEvents: [],
    futureEvents: []
  }

  splitList (events) {
    const pastEvents = []
    const futureEvents = []
    events.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    }).map((event) => {
      const currentDate = new Date()
      const eventDate = new Date(event.date)
      if (eventDate < currentDate) {
        event.past = true
        pastEvents.push(event)
      } else {
        event.past = false
        futureEvents.push(event)
      }
    })
    this.setState({ pastEvents: pastEvents, futureEvents: futureEvents })
  }

  componentDidMount() {
    axios.get('api')
      .then(res => this.splitList(res.data))
      .catch(err => {
        console.log(err)
        this.setState({ axiosError: true })
      })
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    return (
      <div className="App">
        <h1>Promise Timeline App</h1>
        <NewEvent />
        {this.state.isLoading ? <h1>Loading...</h1> : null}
        {this.state.axiosError ? <h1>There was an error processing your request. Please try again.</h1> : null}
          <Timeline
            pastEvents={this.state.pastEvents}
            futureEvents={this.state.futureEvents}
          />
      </div>
    )
  }
}

export default App
