/*Computes the number of tasks completed by user id.
 *Takes args, The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
 *Only print users with completed task
 */

const req = require("request");

const url = `${process.argv[2]}`;

req(url, (error, body) => {
  if (error) {
    return console.error(error);
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
    return;
  }

  const todos = JSON.parse(body);
  const completedTasks = {};

  // Loop through the data to count completed tasks by user
  for (const todo of todos) {
    if (todo.completed) {
      const userId = todo.userId.toString();
      if (completedTasks[userId]) {
        completedTasks[userId] += 1;
      } else {
        completedTasks[userId] = 1;
      }
    }
  }
  console.log(completedTasks);
});
