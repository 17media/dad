"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dad_1 = __importDefault(require("./libs/Dad"));
const dad = (inputValue) => new Dad_1.default(inputValue);
exports.default = dad;
var isToday_1 = require("./libs/isToday");
exports.isToday = isToday_1.isToday;
var now_1 = require("./libs/now");
exports.now = now_1.now;
exports.tw = (inputValue) => dad(inputValue).tw;
exports.hk = (inputValue) => dad(inputValue).hk;
exports.ja = (inputValue) => dad(inputValue).ja;
exports = dad;
