const express = require('express')
const app = express()
const port = process.env.port || 5000
const data = require('./data')
const events = data.events
const postData = data.postData

app.use(express.json())

app.listen(port, () => console.log(`Express is working at port ${port}.`))

app.get('/api', (req, res) => {
  res.send(events)
})

app.post('/api', (req, res) => {
  postData(req, res)
})
