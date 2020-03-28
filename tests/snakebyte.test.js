const sb = require("snakebyte");

describe('Conversion between same unit', () => {

    test('Convert 1 Kilobyte to Kilobyte', () => {
        expect(
            sb.convert(1, sb.Kilobyte, sb.Kilobyte)
        ).toBe(1);
    });

    test('Convert 1 Megabyte to Megabyte', () => {
        expect(
            sb.convert(1, sb.Megabyte, sb.Megabyte)
        ).toBe(1);
    });

    test('Convert 1 Gigabyte to Gigabyte', () => {
        expect(
            sb.convert(1, sb.Gigabyte, sb.Gigabyte)
        ).toBe(1);
    });

    test('Convert 1 Terabyte to Terabyte', () => {
        expect(
            sb.convert(1, sb.Terabyte, sb.Terabyte)
        ).toBe(1);
    });

    test('Convert 1 Petabyte to Petabyte', () => {
        expect(
            sb.convert(1, sb.Petabyte, sb.Petabyte)
        ).toBe(1);
    });

    test('Convert 1 Exabyte to Exabyte', () => {
        expect(
            sb.convert(1, sb.Exabyte, sb.Exabyte)
        ).toBe(1);
    });

    test('Convert 1 Zettabyte to Zettabyte', () => {
        expect(
            sb.convert(1, sb.Zettabyte, sb.Zettabyte)
        ).toBe(1);
    });

    test('Convert 1 Yottabyte to Yottabyte', () => {
        expect(
            sb.convert(1, sb.Yottabyte, sb.Yottabyte)
        ).toBe(1);
    });

});

describe('Conversion to one unit higher', () => {

    test('Convert 1000 Kilobyte to Megabyte', () => {
        expect(
            sb.convert(1000, sb.Kilobyte, sb.Megabyte)
        ).toBe(1);
    });

    test('Convert 1000 Megabyte to Gigabyte', () => {
        expect(
            sb.convert(1000, sb.Megabyte, sb.Gigabyte)
        ).toBe(1);
    });

    test('Convert 1000 Gigabyte to Terabyte', () => {
        expect(
            sb.convert(1000, sb.Gigabyte, sb.Terabyte)
        ).toBe(1);
    });

    test('Convert 1000 Gigabyte to Terabyte', () => {
        expect(
            sb.convert(1000, sb.Gigabyte, sb.Terabyte)
        ).toBe(1);
    });

    test('Convert 1000 Terabyte to Petabyte', () => {
        expect(
            sb.convert(1000, sb.Terabyte, sb.Petabyte)
        ).toBe(1);
    });

    test('Convert 1000 Petabyte to Exabyte', () => {
        expect(
            sb.convert(1000, sb.Petabyte, sb.Exabyte)
        ).toBe(1);
    });

    test('Convert 1000 Exabyte to Zettabyte', () => {
        expect(
            sb.convert(1000, sb.Exabyte, sb.Zettabyte)
        ).toBe(1);
    });

    test('Convert 1000 Zettabyte to Yottabyte', () => {
        expect(
            sb.convert(1000, sb.Zettabyte, sb.Yottabyte)
        ).toBe(1);
    });

});

describe('Conversion to one unit lower', () => {

    test('Convert 1 Megabyte to Kilobyte', () => {
        expect(
            sb.convert(1, sb.Megabyte, sb.Kilobyte)
        ).toBe(1000);
    });

    test('Convert 1 Gigabyte to Megabyte', () => {
        expect(
            sb.convert(1, sb.Gigabyte, sb.Megabyte)
        ).toBe(1000);
    });

    test('Convert 1 Terabyte to Gigabyte', () => {
        expect(
            sb.convert(1, sb.Terabyte, sb.Gigabyte)
        ).toBe(1000);
    });

    test('Convert 1 Petabyte to Terabyte', () => {
        expect(
            sb.convert(1, sb.Terabyte, sb.Gigabyte)
        ).toBe(1000);
    });

});

describe('Conversion to one unit lower with decimals', () => {

    test('Convert 1.001 Megabyte to Kilobyte', () => {
        expect(
            sb.convert(1.001, sb.Megabyte, sb.Kilobyte)
        ).toBe(1001);
    });

});

describe('Conversion from a fraction down', () => {

    test('Convert 0.001 Megabyte to Kilobyte', () => {
        expect(
            sb.convert(0.001, sb.Megabyte, sb.Kilobyte)
        ).toBe(1);
    });

    test('Convert 0.000001 Gigabyte to Kilobyte', () => {
        expect(
            sb.convert(0.000001, sb.Gigabyte, sb.Kilobyte)
        ).toBe(1);
    });

    test('Convert 0.000000001 Terabyte to Kilobyte', () => {
        expect(
            sb.convert(0.000000001, sb.Terabyte, sb.Kilobyte)
        ).toBe(1);
    });

    test('Convert 0.000000000001 Petabyte to Kilobyte', () => {
        expect(
            sb.convert(0.000000000001, sb.Petabyte, sb.Kilobyte)
        ).toBe(1);
    });

    test('Convert 0.000000000000001 Exabyte to Kilobyte', () => {
        expect(
            sb.convert(0.000000000000001, sb.Exabyte, sb.Kilobyte)
        ).toBe(1);
    });

    test('Convert 0.000000000000000001 Zettabyte to Kilobyte', () => {
        expect(
            sb.convert(0.000000000000000001, sb.Zettabyte, sb.Kilobyte)
        ).toBe(1);
    });

    test('Convert 0.000000000000000000001 Yottabyte to Kilobyte', () => {
        expect(
            sb.convert(0.000000000000000000001, sb.Yottabyte, sb.Kilobyte)
        ).toBe(1);
    });

});
