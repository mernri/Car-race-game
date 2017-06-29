Car.prototype._crashTrackLimits = function() {
  var carTopPosition = $('#' + this.name).position().top;
  var carLeftPosition = $('#' + this.name).position().left;
  var carHeight = $('#' + this.name).height();
  var carWidth = $('#' + this.name).width();
  if (carLeftPosition < trackLeftLimit) {
    // this.stop();
    return true;
  }
  if (carTopPosition < trackUpperLimit) {
    // this.stop();
    return true;
  }
  if (carLeftPosition > trackRightLimit - $('#' + this.name).width()) {
    // this.stop();
    return true;
  }
  if (carTopPosition > trackBottomLimit - $('#' + this.name).width()) {
    // this.stop();
    return true;
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

Car.prototype.finishLineCross = function() {
    var obstacleTopPosition = $('#finish-line-1').position().top;
    var obstacleLeftPosition = $('#finish-line-1').position().left;
    var obstacleHeight = $('#finish-line-1').height();
    var obstacleWidth = $('#finish-line-1').width();

    var carTopPosition = $('#' + this.name).position().top;
    var carLeftPosition = $('#' + this.name).position().left;
    var carHeight = $('#' + this.name).height();
    var carWidth = $('#' + this.name).width();

  if((carTopPosition > obstacleTopPosition) &&
    (carTopPosition < obstacleTopPosition + obstacleHeight) &&
    (carLeftPosition > obstacleLeftPosition) &&
    (carLeftPosition < obstacleLeftPosition + (obstacleWidth))) {
      console.log(this.name + " finish line crosshed!");
      return true;
    }
};
