// function Game (options) {
//   this.player1 === true,
//   this.player2 === true
// }


var fps = 30;
var car = new Car("CarPlayer", 50/fps);

var intervalId = setInterval(function() {
  car.renderNewPosition();
},1000/fps);
