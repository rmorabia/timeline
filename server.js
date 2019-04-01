const express = require('express')
const app = express()
const port = process.env.port || 5000
const events = require('./data')

app.use(express.json())

app.listen(port, () => console.log(`Express is working at port ${port}.`))

app.get('/api', (req, res) => {
  res.send(events)
})

app.post('/api', (req, res) => {
  const event = {
    type: req.body.type,
    date: req.body.date,
    text: req.body.text,
    attended: req.body.attended
  }
  events.push(event)
  res.send(event)
})
