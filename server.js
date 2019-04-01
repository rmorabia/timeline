const express = require('express')
const app = express()
const port = process.env.port || 5000
const events = require('./data')
const { check, validationResult } = require('express-validator/check')

app.use(express.json())

app.listen(port, () => console.log(`Express is working at port ${port}.`))

app.get('/api', (req, res) => {
  res.send(events)
})

app.post('/api', [
  check('type').isIn(['case-appt', 'client-update', 'court-date', 'reminder']),
  check('date').isAscii(),
  check('attended').isBoolean()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const event = {
    type: req.body.type,
    date: req.body.date,
    text: req.body.text,
    attended: req.body.attended
  }
  events.push(event)
  res.send(event)
})
