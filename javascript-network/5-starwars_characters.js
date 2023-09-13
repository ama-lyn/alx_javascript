/*Prints all characters of a Star Wars movie:
 *Takes args, the first argument is the Movie ID - example: 3 = “Return of the Jedi”
 *Displays one character name by line
 *You must use the Star wars API
 */

const req = require("request");
const movieID = `${process.argv[2]}`;
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

/*if (process.argv.length > 2) {
  req(url, (err, response) => {
    console.log(`Characters in ${response.body.title} :`);
    for (let i = 0; i < 15; i++) {
      console.log(`${response.body.characters[i].name}`);
    }
  });
  
}*/

if (process.argv.length > 2) {
  req(url, function (error, response, body) {
    if (error) {
      return console.error(error);
    }
    const movies = JSON.parse(body);
    movies.characters.forEach((characterURL) => {
      req(characterURL, (error, response, body) => {
        if (error) {
          return console.error(error);
        }

        const character = JSON.parse(body);
        console.log(character.name);
      });
    });
  });
}
