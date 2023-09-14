/*Private methods with closure*/

const studentHogwarts = (function () {
  // Private variables
  let privateScore = 0;
  let name = null;

  // Private method to change the score
  function changeScoreBy(points) {
    privateScore += points;
  }

  // Public methods exposed via an object
  return {
    setName(newName) {
      name = newName;
    },
    rewardStudent() {
      changeScoreBy(1);
    },
    penalizeStudent() {
      changeScoreBy(-1);
    },
    getScore() {
      return `${name}: ${privateScore}`;
    },
  };
})();

// Create an instance of studentHogwarts for Harry
const harry = Object.create(studentHogwarts);
harry.setName("Harry");

// Reward Harry four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log Harry's name and score
console.log(harry.getScore());

// Create an instance of studentHogwarts for Draco
const draco = Object.create(studentHogwarts);
draco.setName("Draco");

// Reward Draco once and penalize three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log Draco's name and score
console.log(draco.getScore());
