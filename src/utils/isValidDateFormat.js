"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidDateFormat = (dateString) => !isNaN(+new Date(dateString));
exports.default = isValidDateFormat;
