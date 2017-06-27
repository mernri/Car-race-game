console.log("Starting car race");

function Car(options) {
  this.direction = "left"; //up, up-right, right, down-right, down, down-left, left, up-left
  this.speed = 5;
}

//defines movement of the car pixels depending on the direction
Car.prototype.moveForward = function(direction,carSpeed) {
  this.direction = direction;
  var that = this;
  this.intervalId = setInterval(function() {
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
      default:
    }
  },30);
};

Car.prototype.stop = function(lastDirection) {
  if (this.intervalId){
    clearInterval(this.intervalId);
    // carDiv1.css({
    //   top: carVertPosition = carVertPosition,
    //   left: carHorPosition = carHorPosition});
    this.direction = lastDirection;
  }
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


//------------------ control crashes ---------------------------
//--------------------------------------------------------------


Car.prototype.carCrashes = function () {
  if($("#car-player1").position().left == "0px");
  car.stop("left");
};
