console.log("Starting car race");

function Car(name, v, PlaceCarYpx) {
  this.name = name;
  this.posLeft = 0;
  this.posTop = 0;
  this.offX = 550;
  this.offY = PlaceCarYpx;
  this.speed = v;
  this.angle = 180;
  this.pointAt = 0;
  this.turnSpeed = 10;
  this.placeInTrack();
}

Car.prototype.placeInTrack = function(offX, offY) {
  var el = $("<div>").attr('id', this.name).addClass('car');
  $('#track').append(el);
  el.css({
    top: this.posTop + this.offY,
    left: this.posLeft + this.offX,
  });
};

Car.prototype.renderNewPosition = function() {
  this.posLeft += Math.cos(this.angle * Math.PI / 180) * this.speed;
  this.posTop += Math.sin(this.angle * Math.PI / 180) * this.speed;
  $('#' + this.name).css({
    top: this.posTop + this.offY,
    left: this.posLeft + this.offX
  });
};

Car.prototype.turn = function(direction) {
  if (direction == "right") {
    this.angle += this.turnSpeed;
    $('#' + this.name).css({
      transform: "rotate(" + (this.pointAt += this.turnSpeed) + "deg)"
    });
  } else {
    this.angle -= this.turnSpeed;
    $('#' + this.name).css({
      transform: "rotate(" + (this.pointAt -= this.turnSpeed) + "deg)"
    });
  }
};


Car.prototype.stop = function() {
  if (this.speed >= 1 / fps) {
    this.speed -= (50 / fps);
  } else {
    this.speed = (0 / fps);
  }
};

Car.prototype.start = function() {
  if (this.speed <= 151 / fps) {
    this.speed += (50 / fps);
  } else {
    this.speed = (50 / fps);
  }
};

//------------------ control crashes ---------------------------
//--------------------------------------------------------------

Car.prototype.crashTrackLimits = function() {
  var carTopPosition = $('#' + this.name).position().top;
  var carLeftPosition = $('#' + this.name).position().left;
  var carHeight = $('#' + this.name).height();
  var carWidth = $('#' + this.name).width();
  if (carLeftPosition < trackLeftLimit) {
    this.stop();
  }
  if (carTopPosition < trackUpperLimit) {
    this.stop();
  }
  if (carLeftPosition > trackRightLimit - $('#' + this.name).width()) {
    this.stop();
  }
  if (carTopPosition > trackBottomLimit - $('#' + this.name).width()) {
    this.stop();
  }
};

Car.prototype.crashObstacles = function() {
    if (this._leftCrash()) {
      this.stop();
    }
    if (this._rightCrash()) {
      this.stop();
    }
    if (this._topCrash()) {
      this.stop();
    }
    if(this._bottomCrash()) {
      this.stop();
    }
};

Car.prototype._leftCrash = function() {
  for (var obstacleId = 1; obstacleId < 4; obstacleId++) {
    var obstacleTopPosition = $('#wall-' + obstacleId).position().top;
    var obstacleLeftPosition = $('#wall-' + obstacleId).position().left;
    var obstacleHeight = $('#wall-' + obstacleId).height();
    var obstacleWidth = $('#wall-' + obstacleId).width();

    var carTopPosition = $('#' + this.name).position().top;
    var carLeftPosition = $('#' + this.name).position().left;
    var carHeight = $('#' + this.name).height();
    var carWidth = $('#' + this.name).width();

  if((carTopPosition > obstacleTopPosition) &&
    (carTopPosition < obstacleTopPosition + obstacleHeight) &&
    (carLeftPosition < obstacleLeftPosition) &&
    (carLeftPosition > obstacleLeftPosition - (obstacleWidth + 40))) {
      console.log("crashed from left!!");
      return true;
    }
  }
};

Car.prototype._rightCrash = function() {
  for (var obstacleId = 1; obstacleId < 4; obstacleId++) {
    var obstacleTopPosition = $('#wall-' + obstacleId).position().top;
    var obstacleLeftPosition = $('#wall-' + obstacleId).position().left;
    var obstacleHeight = $('#wall-' + obstacleId).height();
    var obstacleWidth = $('#wall-' + obstacleId).width();

    var carTopPosition = $('#' + this.name).position().top;
    var carLeftPosition = $('#' + this.name).position().left;
    var carHeight = $('#' + this.name).height();
    var carWidth = $('#' + this.name).width();

  if((carTopPosition > obstacleTopPosition) &&
    (carTopPosition < obstacleTopPosition + obstacleHeight) &&
    (carLeftPosition > obstacleLeftPosition) &&
    (carLeftPosition < obstacleLeftPosition + (obstacleWidth))) {
      console.log("crashed from right!!");
      return true;
    }
  }
};

Car.prototype._topCrash = function() {
    var obstacleId = 4;
    var obstacleTopPosition = $('#wall-' + obstacleId).position().top;
    var obstacleLeftPosition = $('#wall-' + obstacleId).position().left;
    var obstacleHeight = $('#wall-' + obstacleId).height();
    var obstacleWidth = $('#wall-' + obstacleId).width();

    var carTopPosition = $('#' + this.name).position().top;
    var carLeftPosition = $('#' + this.name).position().left;
    var carHeight = $('#' + this.name).height();
    var carWidth = $('#' + this.name).width();

  if((carTopPosition < obstacleTopPosition) &&
    (carTopPosition > obstacleTopPosition - (obstacleHeight + 40)) &&
    (carLeftPosition > obstacleLeftPosition) &&
    (carLeftPosition < obstacleLeftPosition + obstacleWidth)) {
      console.log("crashed from top!!");
      return true;
    }
};

Car.prototype._bottomCrash = function() {
    var obstacleId = 4;
    var obstacleTopPosition = $('#wall-' + obstacleId).position().top;
    var obstacleLeftPosition = $('#wall-' + obstacleId).position().left;
    var obstacleHeight = $('#wall-' + obstacleId).height();
    var obstacleWidth = $('#wall-' + obstacleId).width();

    var carTopPosition = $('#' + this.name).position().top;
    var carLeftPosition = $('#' + this.name).position().left;
    var carHeight = $('#' + this.name).height();
    var carWidth = $('#' + this.name).width();

  if((carTopPosition > obstacleTopPosition) &&
    (carTopPosition < obstacleTopPosition + (obstacleHeight)) &&
    (carLeftPosition > obstacleLeftPosition) &&
    (carLeftPosition < obstacleLeftPosition + obstacleWidth)) {
      console.log("crashed from bottom!!");
      return true;
    }
};







// function Car(options) {
//   this.direction = "left"; //up, up-right, right, down-right, down, down-left, left, up-left
//   this.speed = 5;
// }
//
// //defines movement of the car pixels depending on the direction
// Car.prototype.moveForward = function(direction,carSpeed) {
//   console.log("acelera");
//   this.direction = direction;
//   var that = this;
//   this.intervalId = setInterval(function() {
//     //coger valores x e y del coche
//     actualCarHorPosition = $("#car-player1").position().left;
//     actualCarVertPosition = $("#car-player1").position().top;
//     //llamar a una funcion que controle las colisiones
//     car.carCrashes();
//     //y en la funcion, controlas si el area que ocupa el coche, coinciden con las de las barreras
//     switch (that.direction) {
//       case "left":
//         carDiv1.css({
//           top: carVertPosition = carVertPosition,
//           left: carHorPosition -= that.speed});
//         break;
//       case "up-left":
//         carDiv1.css({
//           top: carVertPosition -= that.speed,
//           left: carHorPosition -= that.speed});
//           console.log("acelerando direccion up-left!!");
//         break;
//       case "up":
//         carDiv1.css({
//           top: carVertPosition -= that.speed,
//           left: carHorPosition = carHorPosition});
//           console.log("acelerando direccion up!!");
//         break;
//       case "up-right":
//         carDiv1.css({
//           top: carVertPosition -= that.speed,
//           left: carHorPosition += that.speed});
//           console.log("acelerando direccion up-right!!");
//         break;
//       case "right":
//         carDiv1.css({
//           top: carVertPosition = carVertPosition,
//           left: carHorPosition += that.speed});
//           console.log("acelerando direccion right!!");
//         break;
//       case "down-right":
//         carDiv1.css({
//           top: carVertPosition += that.speed,
//           left: carHorPosition += that.speed});
//           console.log("acelerando direccion down-right!!");
//         break;
//       case "down":
//         carDiv1.css({
//           top: carVertPosition += that.speed,
//           left: carHorPosition = carHorPosition});
//           console.log("acelerando direccion down!!");
//         break;
//       case "down-left":
//         carDiv1.css({
//           top: carVertPosition += that.speed,
//           left: carHorPosition -= that.speed});
//           console.log("acelerando direccion down-left!!");
//         break;
//       default:
//     }
//   },30);
// };
//
// Car.prototype.stop = function() {
//   if (this.intervalId){
//     clearInterval(this.intervalId);
//     // carDiv1.css({
//     //   top: carVertPosition = carVertPosition,
//     //   left: carHorPosition = carHorPosition});
//     // this.direction = lastDirection;
//   }
// };
//
// //controls that the turns are allowed just from correct directions
// Car.prototype.changeDirection = function(newDirection) {
//   if (newDirection === 'left') {
//     if (this.direction === 'down-left' || this.direction === 'up-left') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'up-left') {
//     if (this.direction === 'left' || this.direction === 'up') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'up') {
//     if (this.direction === 'up-left' || this.direction === 'up-right') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'up-right') {
//     if (this.direction === 'up' || this.direction === 'right') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'right') {
//     if (this.direction === 'up-right' || this.direction === 'down-right') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'down-right') {
//     if (this.direction === 'right' || this.direction === 'down') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'down') {
//     if (this.direction === 'down-right' || this.direction === 'down-left') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'down-left') {
//     if (this.direction === 'down' || this.direction === 'left') {
//         this.direction = newDirection;
//         return;
//       }
//     }
// };
