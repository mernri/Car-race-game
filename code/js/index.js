
//-------------- Keys functions ----------------
//----------------------------------------------

$(document).keydown(function(event) {
  if (event.keyCode == 38) {
    //moveForward
    car.start();
  }
  if (event.keyCode == 39) {
    //rotate right
    car.turn("right");
  }
  if (event.keyCode == 37) {
    //rotate left
    car.turn("left");
  }
  if (event.keyCode == 40) {
    //break
    car.stop();
  }
});

//moves the car towards the desired direction
// $(document).keydown(function(event) {
//   if (event.keyCode == 38) {
//     //moveForward
//     car.moveForward(car.direction);
//   }
//   if (event.keyCode == 39) {
//     //rotate right
//     switch (car.direction) {
//       case "left":
//         car.changeDirection("up-left");
//         carDiv1.css({transform: "rotate(45deg)"});
//         break;
//       case "up-left":
//         car.changeDirection("up");
//         carDiv1.css({transform: "rotate(90deg)"});
//         break;
//       case "up":
//         car.changeDirection("up-right");
//         carDiv1.css({transform: "rotate(135deg)"});
//         break;
//       case "up-right":
//         car.changeDirection("right");
//         carDiv1.css({transform: "rotate(180deg)"});
//         break;
//       case "right":
//         car.changeDirection("down-right");
//         carDiv1.css({transform: "rotate(225deg)"});
//         break;
//       case "down-right":
//         car.changeDirection("down");
//         carDiv1.css({transform: "rotate(270deg)"});
//         break;
//       case "down":
//         car.changeDirection("down-left");
//         carDiv1.css({transform: "rotate(315deg)"});
//         break;
//       case "down-left":
//         car.changeDirection("left");
//         carDiv1.css({transform: "rotate(0deg)"});
//         break;
//       }
//   }
//   if (event.keyCode == 37) {
//     //rotate left
//     switch (car.direction) {
//       case "left":
//         car.changeDirection("down-left");
//         carDiv1.css({transform: "rotate(315deg)"});
//         break;
//       case "up-left":
//         car.changeDirection("left");
//         carDiv1.css({transform: "rotate(0deg)"});
//         break;
//       case "up":
//         car.changeDirection("up-left");
//         carDiv1.css({transform: "rotate(45deg)"});
//         break;
//       case "up-right":
//         car.changeDirection("up");
//         carDiv1.css({transform: "rotate(90deg)"});
//         break;
//       case "right":
//         car.changeDirection("up-right");
//         carDiv1.css({transform: "rotate(135deg)"});
//         break;
//       case "down-right":
//         car.changeDirection("right");
//         carDiv1.css({transform: "rotate(180deg)"});
//         break;
//       case "down":
//         car.changeDirection("down-right");
//         carDiv1.css({transform: "rotate(225deg)"});
//         break;
//       case "down-left":
//         car.changeDirection("down");
//         carDiv1.css({transform: "rotate(270deg)"});
//         break;
//       }
//   }
//   if (event.keyCode == 40) {
//     //break
//     if (car.direction == "left") {
//       car.stop("left");
//     }
//     if (car.direction == "up-left") {
//       car.stop("up-left");
//     }
//     if (car.direction == "up") {
//       car.stop("up");
//     }
//     if (car.direction == "up-right") {
//       car.stop("up-right");
//     }
//     if (car.direction == "right") {
//       car.stop("right");
//     }
//     if (car.direction == "down-right") {
//       car.stop("down-right");
//     }
//     if (car.direction == "down") {
//       car.stop("down");
//     }
//     if (car.direction == "down-left") {
//       car.stop("down-left");
//     }
//   }
// });
