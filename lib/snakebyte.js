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
    const fromUnit = mapDecimalUnit[options.from], toUnit = mapDecimalUnit[options.to], exponent = fromUnit - toUnit, fractions = exponent < 0
        ? Math.abs(exponent + fromUnit)
        : 0;
    return parseFloat((input * Math.pow(10, exponent)).toFixed(fractions));
};
exports.snakebyte = snakebyte;
