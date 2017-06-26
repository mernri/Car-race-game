console.log("Starting car race");

function Car(options) {
  this.direction = "left"; //up, up-right, right, down-right, down, down-left, left, up-left
  this.speed = 7;
}

var carDiv1 = $("#car-player1");
var carVertPosition = $("#car-player1").position().top;
var carHorPosition = $("#car-player1").position().left;

//defines movement of the car pixels depending on the direction
Car.prototype.moveForward = function(direction,carSpeed) {
  this.direction = direction;
  var that = this;
  var intervalId = setInterval(function() {
    switch (that.direction) {
      case "left":
        carDiv1.css({
          top: carVertPosition = carVertPosition,
          left: carHorPosition -= that.speed});
        break;
      case "up-left":
        carDiv1.css({
          top: carVertPosition -= that.speed,
          left: carHorPosition -= that.speed});
          console.log("acelerando direccion up-left!!");
        break;
      case "up":
        carDiv1.css({
          top: carVertPosition -= that.speed,
          left: carHorPosition = carHorPosition});
          console.log("acelerando direccion up!!");
        break;
      case "up-right":
        carDiv1.css({
          top: carVertPosition -= that.speed,
          left: carHorPosition += that.speed});
          console.log("acelerando direccion up-right!!");
        break;
      case "right":
        carDiv1.css({
          top: carVertPosition = carVertPosition,
          left: carHorPosition += that.speed});
          console.log("acelerando direccion right!!");
        break;
      case "down-right":
        carDiv1.css({
          top: carVertPosition += that.speed,
          left: carHorPosition += that.speed});
          console.log("acelerando direccion down-right!!");
        break;
      case "down":
        carDiv1.css({
          top: carVertPosition += that.speed,
          left: carHorPosition = carHorPosition});
          console.log("acelerando direccion down!!");
        break;
      case "down-left":
        carDiv1.css({
          top: carVertPosition += that.speed,
          left: carHorPosition -= that.speed});
          console.log("acelerando direccion down-left!!");
        break;
      case "none":
        carDiv1.css({
          top: carVertPosition = carVertPosition,
          left: carHorPosition = carHorPosition});
          console.log("parando!!");
        break;
      default:
    }
  },30);
};

//controls that the turns are allowed just from correct directions
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

//moves the car towards the desired direction
$(document).keydown(function(event) {

  if (event.keyCode == 38) {
    //moveForward
    car.moveForward(car.direction);
  }
  if (event.keyCode == 39) {
    //rotate right
    switch (car.direction) {
      case "left":
        car.changeDirection("up-left");

        break;
      case "up-left":
        car.changeDirection("up");
        break;
      case "up":
        car.changeDirection("up-right");
        break;
      case "up-right":
        car.changeDirection("right");
        break;
      case "right":
        car.changeDirection("down-right");
        break;
      case "down-right":
        car.changeDirection("down");
        break;
      case "down":
        car.changeDirection("down-left");
        break;
      case "down-left":
        car.changeDirection("left");
        break;
      }
  }
  if (event.keyCode == 37) {
    //rotate left
    switch (car.direction) {
      case "left":
        car.changeDirection("down-left");
        break;
      case "up-left":
        car.changeDirection("left");
        break;
      case "up":
        car.changeDirection("up-left");
        break;
      case "up-right":
        car.changeDirection("up");
        break;
      case "right":
        car.changeDirection("up-right");
        break;
      case "down-right":
        car.changeDirection("right");
        break;
      case "down":
        car.changeDirection("down-right");
        break;
      case "down-left":
        car.changeDirection("down");
        break;
      }
  }
  if (event.keyCode == 40) {
    //break
    car.moveForward("none");
  }
});
