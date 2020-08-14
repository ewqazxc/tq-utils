"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDateTime = exports.renderDate = exports.renderTime = void 0;
var moment_1 = __importDefault(require("moment"));
exports.renderTime = function (text, format, empty) {
    if (format === void 0) { format = 'YYY-MM-DD'; }
    if (empty === void 0) { empty = '-'; }
    var time = text ? moment_1.default(text).format(format) : empty;
    if (time === 'Invalid date') {
        time = empty;
    }
    return time;
};
exports.renderDate = function (text, empty) {
    if (empty === void 0) { empty = '-'; }
    return exports.renderTime(text, 'YYYY-MM-DD', empty);
};
exports.renderDateTime = function (text, empty) {
    if (empty === void 0) { empty = '-'; }
    return exports.renderTime(text, 'YYYY-MM-DD HH:mm:ss', empty);
};
