"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const now_1 = require("./now");
const isToday = (sec = 0) => {
    const ms = sec * 1000;
    const dadNow = now_1.now();
    const currentDate = new Date(dadNow * 1000);
    return new Date(ms).toDateString() === currentDate.toDateString();
};
exports.isToday = isToday;
exports.default = isToday;
