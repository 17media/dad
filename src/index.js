"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dad_1 = __importDefault(require("./libs/dad"));
const isToday_1 = __importDefault(require("./libs/isToday"));
exports.isToday = isToday_1.default;
const now_1 = __importDefault(require("./libs/now"));
exports.now = now_1.default;
function tw(value) {
    if (typeof value === 'string')
        return dad_1.default(value).tw;
    return dad_1.default(value).tw;
}
exports.tw = tw;
function ja(value) {
    if (typeof value === 'string')
        return dad_1.default(value).ja;
    return dad_1.default(value).ja;
}
exports.ja = ja;
exports.hk = tw;
exports.default = dad_1.default;
exports = dad_1.default;
