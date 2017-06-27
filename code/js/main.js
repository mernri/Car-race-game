//------------ Gobal Variables ---------------------------
//--------------------------------------------------------

//dimensions car related to the div where it is contained
var carWidth = 30;
var carLength = 60;

// position of car player 1
var carDiv1 = $("#car-player1");
var carVertPosition = $("#car-player1").position().top;
var carHorPosition = $("#car-player1").position().left;

//updated position in order to calculate colitions
var actualCarHorPosition = $("#car-player1").position().left;
var actualCarVertPosition = $("#car-player1").position().top;


//position of the track limit
trackUpperLimit = 0;
trackBottomLimit = 650;
trackLeftLimit = 0;
trackRightLimit = 899;
