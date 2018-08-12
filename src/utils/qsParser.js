"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ienv_1 = require("ienv");
const qsParser = (qString = '') => {
    const qsObj = {};
    const qs = qString ||
        (ienv_1.isNode
            ? process.argv.slice(2).join('&')
            : decodeURIComponent(window.location.search.slice(1)));
    if (qs) {
        qs.split('&').forEach((nameValue) => {
            const [name, value] = nameValue.split('=');
            Object.assign(qsObj, {
                [name]: typeof value === 'undefined' ? true : value,
            });
        });
    }
    return qsObj;
};
exports.default = qsParser;
