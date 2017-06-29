var fps = 60; //renders the selected frames per second of main interval ID

var car1 = new Car("car-player1", 50 / fps, 500);
var car2 = new Car("car-player2", 50 / fps, 550);

var intervalId = setInterval(function() {
  car1.renderNewPosition();
  car1.crashObstacles();
  car1.finishLineCross();
  car2.renderNewPosition();
  car2.crashObstacles();
  car2.finishLineCross();
}, 1000 / fps);
