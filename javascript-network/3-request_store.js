/*Gets the contents of a webpage and stores it in a file.
 *Takes args,The first argument is the URL to request
 *The second argument the file path to store the body response
 *You must use the module request
 */

const req = require("request");
const fs = require("fs");
const url = `${process.argv[2]}`;
//Argument to the file path to store the body response
const filePath = `${process.argv[3]}`;

// Pipe the response data to the file
req.get(url).pipe(fs.createWriteStream(filePath, { encoding: "utf-8" }));
