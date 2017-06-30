var fps = 50; //renders the selected frames per second of main interval ID
var fps2 = 30; //renders the selected frames per second of main interval ID

var car1 = new Car("car-player1", 50 / fps, 500);
var car2 = new Car("car-player2", 50 / fps, 550);
// var finishLine = new FinishLine();

var intervalId = setInterval(function() {
  car1.renderNewPosition();
  car1.crashObstacles();
  car1._onFinishLine1();
  car1._onFinishLine2();
  car2.renderNewPosition();
  car2.crashObstacles();
  car2._onFinishLine1();
  car2._onFinishLine2();

}, 1000 / fps);

var intervalId2 = setInterval(function() {
  car1.lapsCounter();
  car2.lapsCounter();
}, 1000 / fps2);

function playCrashAudio() {
  var carCrash = new Audio ("./code/sounds/crash.mp3");
  carCrash.play();
  carBrakes.volume = 0.2;
}

function playBrakesAudio() {
  var carBrakes = new Audio ("./code/sounds/braking.mp3");
  carBrakes.play();
  carBrakes.volume = 0.7;
}

function playAccelAudio() {
  var carAccel = new Audio ("./code/sounds/car-accel.mp3");
  carAccel.play();
  carAccel.volume = 0.5;
}

function playEngineAudio() {
  var carEngine = new Audio ("./code/sounds/engine.mp3");
  carEngine.play();
  carEngine.volume = 0.2;
}

function playGameMusic() {
  var gameMusic = new Audio ("./code/sounds/nitro-court.mp3");
  gameMusic.play();
  gameMusic.volume = 1;
}
