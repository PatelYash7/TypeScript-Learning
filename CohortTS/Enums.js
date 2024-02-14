"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function doSOmething(keypressed) {
    if (keypressed === Direction.UP) {
        console.log("UP");
    }
}
doSOmething(Direction.UP);
