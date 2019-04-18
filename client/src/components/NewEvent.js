import React, { Component } from 'react'
import DateTime from 'react-datetime'
import '../rdt.css'
import moment from 'moment'
import axios from 'axios'
class NewEvent extends Component {
  state = {
    type: 'movie',
    date: new Date(),
    text: null,
    attended: false,
    isReminder: false,
    isAttended: false,
    isModalOpen: false
  }

  showModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  saveData = (event) => {
    if (event._d) {

      const utcDate = moment(event._d).format()
      const currentDate = moment().format()

      if (this.state.type === 'reminder' | this.state.type === 'movie-update') {
        this.setState({ isAttended: false })
      } else if (currentDate > utcDate) {
        this.setState({ isAttended: true })
      } else {
        this.setState({ isAttended: false })
      }

      this.setState({ date: utcDate })
    } else {
      this.setState({ [event.target.name]: event.target.value })

      if (event.target.name === 'type' && event.target.value === 'reminder') {
        this.setState({ isReminder: true })
      } else if (event.target.name === 'type') {
        this.setState({ isReminder: false })
      }
    }
  }

  submitForm = (e) => {
    //e.preventDefault()
    console.log(this.state)
    axios.post('/api', {
      type: this.state.type,
      date: this.state.date,
      text: this.state.text,
      attended: this.state.attended
    })
    .then((res) => { console.log(res) })
    .catch( (error) => { console.log(error) })
  }

  render () {
    return (
      <div>
        <button className="modalBtn btn primary" onClick={this.showModal}>New Event</button>
        <div className={this.state.isModalOpen ? 'modal active' : 'modal'} id="modal-id">
          <a className="modal-overlay" aria-label="Close" onClick={this.closeModal}></a>
          <div className="modal-container">
            <div className="modal-header">
              <a className="btn btn-clear float-right" onClick={this.closeModal} aria-label="Close"></a>
              <div className="modal-title h5">Add New Event</div>
            </div>
            <div className="modal-body">
              <div className="content">
                <form className="form-group" onSubmit={this.submitForm}>
                  <label htmlFor="modal-control" className="modal-close" ></label>
                  <label htmlFor="type" className="form-label">Type of Event</label>
                  <select name="type" className="form-input" onChange={this.saveData}>
                    <option value="movie">Movie Date</option>
                    <option value="reminder">Reminder for Movie Date</option>
                    <option value="call-mom">Call Mom</option>
                    <option value="movie-update">Movie Data Updated</option>
                  </select>
                  <label htmlFor="date" className="form-label">Date of Event</label>
                  <DateTime onChange={this.saveData} required/>
                  {this.state.isReminder ?
                  <div>
                    <label htmlFor="text" className="form-label">Text for Reminder</label>
                    <textarea name="text" className="form-input" onBlur={this.saveData} placeholder="Hello, this is to confirm your movie date..."></textarea>
                  </div>
                  : null}
                  {this.state.isAttended ?
                  <div>
                      <label className="form-switch">
                      <input type="checkbox" name="attended" onClick={this.saveData} value={!this.state.attended} />
                        <i className="form-icon"></i> Attended?
                      </label>
                  </div>
                  : null}
                  <button className="btn btn-primary form-input" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewEvent
