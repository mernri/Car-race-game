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
  this.laps = -1;
  this.placeInTrack();
  this.carOnFinishLine1 = false;
  this.carOnFinishLine2 = false;
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
    this.speed -= (25 / fps);
    playBrakesAudio ();
  } else {
    this.speed = (0 / fps);
  }
};

Car.prototype.start = function() {
  if (this.speed >= 201 / fps) {
    this.speed = (200 / fps);
    playEngineAudio();
  } else if (this.speed <= 201 / fps){
    this.speed += (25 / fps);
    playAccelAudio();
    playEngineAudio();
  } else {
    this.speed = (25 / fps);
    playAccelAudio();
    var carAccel = new Audio ("./sounds/car-accel.mp3");
    carAccel.play();
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
  if (this._bottomCrash()) {
    this.stop();
  }
  if (this._crashTrackLimits()) {
    this.stop();
  }
};

Car.prototype.lapsCounter = function() {
if (this._onFinishLine1()) {
  // $('#finish-line-1').remove();
  this.laps ++ ;
  console.log(this.name +" has " + this.laps + " laps");
  }
};
