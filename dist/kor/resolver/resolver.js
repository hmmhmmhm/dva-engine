"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onGoingEachPlayer_1 = require("../resolver/event/onGoingEachPlayer");
exports.Resolver = function () {
    console.log('First Test');
    console.log(onGoingEachPlayer_1.onGoingEachPlayer({
        team: "All",
        player: "All"
    }));
};
