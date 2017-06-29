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
