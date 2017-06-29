var fps = 30;
var car1 = new Car("car-player1", 50 / fps, 500);
var car2 = new Car("car-player2", 50 / fps, 550);

var intervalId = setInterval(function() {
  car1.renderNewPosition();
  car1.crashObstacles();
  car2.renderNewPosition();
  car2.crashObstacles();
}, 1000 / fps);

// var intervalId = setInterval(function() {
//   car2.renderNewPosition();
//   car2.crashObstacles();
// }, 1000 / fps);



// $(document).keydown(function(event){
//         keys[event.which] = true;
//     }).keyup(function(event){
//         delete keys[event.which];
//     });
//
//
