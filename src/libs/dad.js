"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toSec_1 = __importDefault(require("../utils/toSec"));
const secToDate_1 = __importDefault(require("../utils/secToDate"));
const isValidDateFormat_1 = __importDefault(require("../utils/isValidDateFormat"));
const unifyTimeFormat_1 = __importDefault(require("../utils/unifyTimeFormat"));
function dad(value) {
    if (!/^(string|number)$/.test(typeof value)) {
        throw new Error('Invalid type. it should be `string` | `number`');
    }
    let dateOrSec = value;
    if (typeof value === 'string') {
        dateOrSec = unifyTimeFormat_1.default(value);
        if (!isValidDateFormat_1.default(dateOrSec)) {
            throw new Error('Invalid date string format, Please pass `YYYY-MM-DD HH:mm:ss`');
        }
        return {
            get tw() {
                return toSec_1.default(new Date(`${dateOrSec}+08:00`));
            },
            get ja() {
                return toSec_1.default(new Date(`${dateOrSec}+09:00`));
            },
            get hk() {
                return this.tw;
            },
        };
    }
    return {
        get tw() {
            return secToDate_1.default(8)(dateOrSec);
        },
        get ja() {
            return secToDate_1.default(9)(dateOrSec);
        },
        get hk() {
            return this.tw;
        },
    };
}
exports.dad = dad;
exports.default = dad;
