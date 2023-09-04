/*Write a function that executes x times a function.
The function must be visible from outside
Prototype: function (x, theFunction)*/

function execute(x, func) {
  for (let i = 0; i < x; ++i) {
    func();
  }
}
