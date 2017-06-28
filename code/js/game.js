var fps = 30;
var car1 = new Car("car-player1", 50 / fps, 500);
var car2 = new Car("car-player2", 50 / fps, 550);

var intervalId = setInterval(function() {
  car1.renderNewPosition();
  car1.crashTrackLimits();
  car1.crashObstacles();
}, 1000 / fps);

var intervalId = setInterval(function() {
  car2.renderNewPosition();
  car2.crashTrackLimits();
}, 1000 / fps);
