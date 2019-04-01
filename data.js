const events = [
  {
    type: 'court-date',
    date: '2019-04-08T09:00:00.000Z',
    text: null,
    attended: false
  },
  {
    type: 'reminder',
    date: '2019-04-07T09:00:00.000Z',
    text: 'Hello John, reminder that you have court tomorrow at 9:00 am at 101 Washington St. Oakland.',
    attended: null
  },
  {
    type: 'case-appt',
    date: '2019-02-27T09:30:00.000Z',
    text: null,
    attended: false
  },
  {
    type: 'reminder',
    date: '2019-04-08T12:30:00.000Z',
    text: 'Hello John, this is to confirm that Court Date has been added to your schedule.',
    attended: null
  },
  {
    type: 'court-date',
    date: '2019-02-25T09:00:00.000Z',
    text: null,
    attended: true
  },
  {
    type: 'client-update',
    date: '2019-01-31T03:30:00.000Z',
    text: null,
    attended: null
  },
  {
    type: 'court-date',
    date: '2019-01-15T14:30:00.000Z',
    text: null,
    attended: true
  },
]

module.exports = events
