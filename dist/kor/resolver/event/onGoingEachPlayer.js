"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGoingEachPlayer = function (value) {
    return "\n    event\n    {\n        Ongoing - Each Player;\n        " + value.team + ";\n        " + value.player + ";\n    }\n    ";
};
