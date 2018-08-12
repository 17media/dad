"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prefix0_1 = __importDefault(require("./prefix0"));
const secToDate = (tz = 8) => (sec = 0) => {
    const D = new Date(sec * 1000);
    D.setTime(+D + tz * 60 * 60 * 1000);
    const year = D.getUTCFullYear();
    const month = D.getUTCMonth();
    const date = D.getUTCDate();
    const hours = D.getUTCHours();
    const minutes = D.getUTCMinutes();
    const seconds = D.getUTCSeconds();
    const day = D.getUTCDay();
    /**
     *
     * @param str - Format date string. default: `YYYY-MM-DDThh:mm:ss`
     */
    const format = (str = 'YYYY-MM-DDThh:mm:ss') => str
        .replace(/[yY]+/, (Y) => String(year).slice(0 - Y.length))
        .replace(/M+/, (MM) => {
        const mm = month + 1;
        return MM.length > 1 ? prefix0_1.default(mm) : String(mm);
    })
        .replace(/D+/, (DD) => (DD.length > 1 ? prefix0_1.default(date) : String(date)))
        .replace(/h+/, (h) => (h.length > 1 ? prefix0_1.default(hours) : String(hours)))
        .replace(/m+/, (m) => (m.length > 1 ? prefix0_1.default(minutes) : String(minutes)))
        .replace(/s+/, (s) => (s.length > 1 ? prefix0_1.default(seconds) : String(seconds)));
    return {
        year,
        month,
        date,
        hours,
        minutes,
        seconds,
        day,
        format,
        get ISO() {
            return this.format();
        },
    };
};
exports.default = secToDate;
