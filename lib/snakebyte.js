"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakebyte = void 0;
const mapDecimalUnit = {
    Byte: 0,
    Kilobyte: 3,
    Megabyte: 6,
    Gigabyte: 9,
    Terabyte: 12,
    Petabyte: 15,
    Exabyte: 18,
    Zettabyte: 21,
    Yottabyte: 24,
};
const snakebyte = (options) => (input) => {
    if (!options.from) {
        options.from = "Byte";
    }
    if (!options.fractions) {
        options.fractions = 3;
    }
    const expo = mapDecimalUnit[options.from] - mapDecimalUnit[options.to], expoAbsPow = Math.pow(10, Math.abs(expo));
    return parseFloat((Math.round((input * Math.pow(10, expo) + Number.EPSILON) * expoAbsPow) / expoAbsPow).toFixed(options.fractions));
};
exports.snakebyte = snakebyte;
