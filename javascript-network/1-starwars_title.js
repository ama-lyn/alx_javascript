#!/usr/bin/node

/* A script that prints the title of a Star Wars movie where the episode number matches a given integer.

The first argument is the movie ID
You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
You must use the module request*/

const req = require("request"); // Import the 'request' module.
const ID = `${process.argv[2]}`; // Get the movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${ID}`; //Star Wars API endpoint

//// Make a GET request to the API
req(url, (error, response, body) => {
  if (error) {
    return console.error(error);
  }
  const object = JSON.parse(body);
  console.log(object.title);
});
