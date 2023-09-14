/* Closure and loops*/

function createClassRoom(numbersOfStudents) {
  function studentSeat(seatNumber) {
    return function () {
      return seatNumber;
    };
  }

  var students = [];

  for (let i = 0; i < numbersOfStudents; i) {
    var seat = i + 1; // Calculate the seat number
    var student = studentSeat(seat); // Create a closure for the seat number
    students.push(student); // Add the closure to the students array
  }
  8;
  return students; // Return the students array
}

var classRoom = createClassRoom(10); // Create a classroom with 10 students

// Executing
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
