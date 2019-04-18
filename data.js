const events = [
  {
    type: 'movie',
    date: '2019-04-08T09:00:00.000Z',
    text: null,
    attended: false
  },
  {
    type: 'reminder',
    date: '2019-04-07T09:00:00.000Z',
    text: 'Hey Radhika, reminder that you have a movie appointment today at Friday!',
    attended: null
  },
  {
    type: 'call-mom',
    date: '2019-02-27T09:30:00.000Z',
    text: null,
    attended: false
  },
  {
    type: 'reminder',
    date: '2019-04-08T12:30:00.000Z',
    text: 'Hello Radhika, this is to confirm that Movie Date has been added to your schedule.',
    attended: null
  },
  {
    type: 'movie',
    date: '2019-02-25T09:00:00.000Z',
    text: null,
    attended: true
  },
  {
    type: 'movie-update',
    date: '2019-01-31T03:30:00.000Z',
    text: null,
    attended: null
  },
  {
    type: 'movie',
    date: '2019-01-15T14:30:00.000Z',
    text: null,
    attended: true
  },
]

module.exports = events
