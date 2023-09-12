#!/usr/bin/node

/*Write a script that display the status code of a GET request.

The first argument is the URL to request (GET)
The status code must be printed like this: code: <status code>
You must use the module request (NB: It must be installed if you haven’t already installed it) */

const req = require("request");

const url = `${process.argv[2]}`;

req.get(url, { encoding: "utf-8" }).on("response", function (res) {
  console.log(`code: ${res.statusCode}`);
});
