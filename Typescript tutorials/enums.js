"use strict";
// Enums are used to create collection of related values with descriptive way.+
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "Hello";
    SeatChoice[SeatChoice["MIDDLE"] = 4] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 5] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 6] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE;
