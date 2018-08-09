"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefix0 = (stringOfNumber) => {
    const n = String(stringOfNumber);
    if (n.length < 2) {
        return `0${n}`;
    }
    return n;
};
exports.default = prefix0;
