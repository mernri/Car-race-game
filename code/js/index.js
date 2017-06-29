
//-------------------------------------------------------------
//---------------- Key functions crontrol ---------------------
//-------------------------------------------------------------

var keys = {};

setInterval(checkControls, 100);

$(document).keydown(function(e){
  keys[e.keyCode] = true;
}).keyup(function(e){
  delete keys[e.keyCode];
});

function checkControls(){
  if (keys[38])
    car1.start();
  else if (keys[39])
    car1.turn("right");
  else if (keys[37])
    car1.turn("left");
  else if (keys[40])
    car1.stop();
  if (keys[87])
    car2.start();
  else if (keys[68])
    car2.turn("right");
  else if (keys[65])
    car2.turn("left");
  else if (keys[83])
    car2.stop();
}
