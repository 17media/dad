"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qsParser_1 = __importDefault(require("../utils/qsParser"));
const toSec_1 = __importDefault(require("../utils/toSec"));
const isValidDateFormat_1 = __importDefault(require("../utils/isValidDateFormat"));
const unifyTimeFormat_1 = __importDefault(require("../utils/unifyTimeFormat"));
let startTime;
const now = () => {
    const currentTime = Date.now();
    const qs = qsParser_1.default();
    const dadNow = unifyTimeFormat_1.default(qs['dad.now'] || qs['--dad.now']);
    if (dadNow && !isValidDateFormat_1.default(dadNow)) {
        throw new Error('Invalid time format in dad.now.');
    }
    const isAuto = qs['--auto'] || qs.auto;
    if (typeof startTime === 'undefined') {
        startTime = currentTime;
    }
    const timeInterval = dadNow ? startTime - +new Date(dadNow) : 0;
    const timeDuration = dadNow && !isAuto ? currentTime - startTime : 0;
    const sec = toSec_1.default(currentTime - timeInterval - timeDuration);
    return sec;
};
exports.default = now;
