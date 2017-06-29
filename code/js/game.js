var fps = 50; //renders the selected frames per second of main interval ID
var fps2 = 4000; //renders the selected frames per second of main interval ID

var car1 = new Car("car-player1", 50 / fps, 500);
var car2 = new Car("car-player2", 50 / fps, 550);
// var finishLine = new FinishLine();

var intervalId = setInterval(function() {
  car1.renderNewPosition();
  car1.crashObstacles();
  car1._onFinishLine1();
  car1._onFinishLine2();
  car2.renderNewPosition();
  car2.crashObstacles();
  car2._onFinishLine1();
  car2._onFinishLine2();
}, 1000 / fps);


var intervalId2 = setInterval(function() {
  car1.lapsCounter();
  car2.lapsCounter();
}, 1000 / fps2);
