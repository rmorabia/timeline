# Timeline

This is a simple app built with React & Node.js. It allows you to add new events and see them on your timeline.

## Features List

* Ability to see timeline events based on category
* Separator between future & past events
* Ability to check off whether the event was attended or not
* Back-end form validation

## How to Run

* Clone the Git repository using `git clone https://github.com/rmorabia/timeline.git`.
* Move into the folder where you cloned the repository.
* Run `npm start` to run the Node server. You can check explore around at `localhost:5000/api`.
* Move into the `client` folder.
* Run `npm start` to run the frontend React application that will pull from the server.

## Package List

* [Express.js](https://expressjs.com/) for help with the server
* [Express-Validator](https://express-validator.github.io/docs/) for help with the backend form validation.
* [Axios](https://www.npmjs.com/package/axios) for help with fetching
* [Moment](http://momentjs.com) for easy date-time help.
* [React-DateTime](https://www.npmjs.com/package/react-datetime) for the user-friendly calendar component in the New Event modal.
