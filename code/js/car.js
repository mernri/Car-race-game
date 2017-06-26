console.log("Starting car race");

function Car(options) {
  this.direction = "left"; //up, up-right, right, down-right, down, down-left, left, up-left
}

//defines movement of the car pixels depending on the direction
Car.prototype.moveForward = function(direction,carSpeed) {
  this.direction = direction;
  var that = this;
  carSpeed = 5; // this should come from a parameter above
  var intervalId = setInterval(function() {
    var carVertPosition = $("#car-player1").position().top;
    var carHorPosition = $("#car-player1").position().left;
    switch (that.direction) {
      case "left":
      $("#car-player1").css({
          top: carVertPosition = carVertPosition,
          left: carHorPosition -= carSpeed});
        break;
      case "up-left":
      $("#car-player1").css({
          top: carVertPosition -= carSpeed,
          left: carHorPosition -= carSpeed});
        break;
      case "up":
      $("#car-player1").css({
          top: carVertPosition -= carSpeed,
          left: carHorPosition = carHorPosition});
        break;
      case "up-right":
      $("#car-player1").css({
          top: carVertPosition -= carSpeed,
          left: carHorPosition += carSpeed});
        break;
      case "right":
      $("#car-player1").css({
          top: carVertPosition = carVertPosition,
          left: carHorPosition += carSpeed});
        break;
      case "down-right":
      $("#car-player1").css({
          top: carVertPosition += carSpeed,
          left: carHorPosition += carSpeed});
        break;
      case "down":
      $("#car-player1").css({
          top: carVertPosition += carSpeed,
          left: carHorPosition = carHorPosition});
        break;
      default:
    }
  },30);
};

Car.prototype.changeDirection = function(newDirection) {
  if (newDirection === 'left') {
    if (this.direction === 'down-left' || this.direction === 'up-left') {
        this.direction = newDirection;
        return;
      }
    }
  if (newDirection === 'up-left') {
    if (this.direction === 'left' || this.direction === 'up') {
        this.direction = newDirection;
        return;
      }
    }
  if (newDirection === 'up') {
    if (this.direction === 'up-left' || this.direction === 'up-right') {
        this.direction = newDirection;
        return;
      }
    }
  if (newDirection === 'up-right') {
    if (this.direction === 'up' || this.direction === 'right') {
        this.direction = newDirection;
        return;
      }
    }
  if (newDirection === 'right') {
    if (this.direction === 'up-right' || this.direction === 'down-right') {
        this.direction = newDirection;
        return;
      }
    }
  if (newDirection === 'down-right') {
    if (this.direction === 'right' || this.direction === 'down') {
        this.direction = newDirection;
        return;
      }
    }
  if (newDirection === 'down') {
    if (this.direction === 'down-right' || this.direction === 'down-left') {
        this.direction = newDirection;
        return;
      }
    }
  if (newDirection === 'down-left') {
    if (this.direction === 'down' || this.direction === 'left') {
        this.direction = newDirection;
        return;
      }
    }
};





// Snake.prototype.changeDirection = function(newDirection) {
//   if (newDirection === 'left' || newDirection === 'right') {
//     if (this.direction === 'up' || this.direction === 'down') {
//       this.direction = newDirection;
//       return;
//     }
//   }
//
//   if (newDirection === 'up' || newDirection === 'down') {
//     if (this.direction === 'left' || this.direction === 'right') {
//       this.direction = newDirection;
//       return;
//     }
//   }
// };
