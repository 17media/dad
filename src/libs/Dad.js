"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toSec_1 = __importDefault(require("../utils/toSec"));
const secToDate_1 = __importDefault(require("../utils/secToDate"));
const isValidDateFormat_1 = __importDefault(require("../utils/isValidDateFormat"));
const unifyTimeFormat_1 = __importDefault(require("../utils/unifyTimeFormat"));
const wm = new WeakMap();
class Dad {
    constructor(inputValue) {
        if (!/^(string|number)$/.test(typeof inputValue)) {
            throw new Error('Invaild type. it should be `string` | `number`');
        }
        let dateOrSec;
        if (typeof inputValue === 'string') {
            dateOrSec = unifyTimeFormat_1.default(inputValue);
            if (!isValidDateFormat_1.default(dateOrSec)) {
                throw new Error('Invaild date string format, Please pass `YYYY-MM-DD HH:mm:ss`');
            }
        }
        else {
            dateOrSec = inputValue;
        }
        const p = wm.set(this, {}).get(this);
        p.dateOrSec = dateOrSec;
    }
    get ja() {
        const p = wm.get(this);
        if (typeof p.dateOrSec === 'number') {
            return secToDate_1.default(9)(p.dateOrSec);
        }
        return toSec_1.default(new Date(`${p.dateOrSec}+09:00`));
    }
    get tw() {
        const p = wm.get(this);
        if (typeof p.dateOrSec === 'number') {
            return secToDate_1.default(8)(p.dateOrSec);
        }
        return toSec_1.default(new Date(`${p.dateOrSec}+08:00`));
    }
    get hk() {
        return this.tw;
    }
}
exports.default = Dad;
