"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const now_1 = __importDefault(require("./now"));
const isToday = (sec) => {
    const ms = sec * 1000;
    const dadNow = now_1.default();
    const currentDate = new Date(dadNow * 1000);
    return new Date(ms).toDateString() === currentDate.toDateString();
};
exports.default = isToday;
