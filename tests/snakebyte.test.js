const { snakebyte } = require("../lib/snakebyte");

describe('Conversion between same unit', () => {

    test('Convert 1 Kilobyte to Kilobyte', () => {
        const kilobyteToKilobyte = snakebyte({
            from: 'Kilobyte',
            to: 'Kilobyte',
        });

        expect(
            kilobyteToKilobyte(1)
        ).toBe(1);
    });

    test('Convert 1 Megabyte to Megabyte', () => {
        const megabyteToMegabyte = snakebyte({
            from: 'Megabyte',
            to: 'Megabyte',
        });

        expect(
            megabyteToMegabyte(1)
        ).toBe(1);
    });

    test('Convert 1 Gigabyte to Gigabyte', () => {
        const gigabyteToGigabyte = snakebyte({
            from: 'Gigabyte',
            to: 'Gigabyte',
        });

        expect(
            gigabyteToGigabyte(1)
        ).toBe(1);
    });

    test('Convert 1 Terabyte to Terabyte', () => {
        const terabyteToTerabyte = snakebyte({
            from: 'Terabyte',
            to: 'Terabyte',
        });

        expect(
            terabyteToTerabyte(1)
        ).toBe(1);
    });

    test('Convert 1 Petabyte to Petabyte', () => {
        const petabyteToPetabyte = snakebyte({
            from: 'Petabyte',
            to: 'Petabyte',
        });

        expect(
            petabyteToPetabyte(1)
        ).toBe(1);
    });

    test('Convert 1 Exabyte to Exabyte', () => {
        const exabyteToExabyte = snakebyte({
            from: 'Exabyte',
            to: 'Exabyte',
        });

        expect(
            exabyteToExabyte(1)
        ).toBe(1);
    });

    test('Convert 1 Zettabyte to Zettabyte', () => {
        const zettabyteToZettabyte = snakebyte({
            from: 'Zettabyte',
            to: 'Zettabyte',
        });

        expect(
            zettabyteToZettabyte(1)
        ).toBe(1);
    });

    test('Convert 1 Yottabyte to Yottabyte', () => {
        const yottabyteToYottabyte = snakebyte({
            from: 'Yottabyte',
            to: 'Yottabyte',
        });

        expect(
            yottabyteToYottabyte(1)
        ).toBe(1);
    });

});

describe('Conversion to one unit higher', () => {

    test('Convert 1000 Kilobyte to Megabyte', () => {
        const kilobyteToMegabyte = snakebyte({
            from: 'Kilobyte',
            to: 'Megabyte',
        });

        expect(
            kilobyteToMegabyte(1000)
        ).toBe(1);
    });

    test('Convert 1000 Megabyte to Gigabyte', () => {
        const megabyteToGigabyte = snakebyte({
            from: 'Megabyte',
            to: 'Gigabyte',
        });

        expect(
            megabyteToGigabyte(1000)
        ).toBe(1);
    });

    test('Convert 1000 Gigabyte to Terabyte', () => {
        const gigabyteToTerabyte = snakebyte({
            from: 'Gigabyte',
            to: 'Terabyte',
        });

        expect(
            gigabyteToTerabyte(1000)
        ).toBe(1);
    });

    test('Convert 1000 Terabyte to Petabyte', () => {
        const terabyteToPetabyte = snakebyte({
            from: 'Terabyte',
            to: 'Petabyte',
        });

        expect(
            terabyteToPetabyte(1000)
        ).toBe(1);
    });

    test('Convert 1000 Petabyte to Exabyte', () => {
        const petabyteToExabyte = snakebyte({
            from: 'Petabyte',
            to: 'Exabyte',
        });

        expect(
            petabyteToExabyte(1000)
        ).toBe(1);
    });

    test('Convert 1000 Exabyte to Zettabyte', () => {
        const exabyteToZettabyte = snakebyte({
            from: 'Exabyte',
            to: 'Zettabyte',
        });

        expect(
            exabyteToZettabyte(1000)
        ).toBe(1);
    });

    test('Convert 1000 Zettabyte to Yottabyte', () => {
        const zettabyteToYottabyte = snakebyte({
            from: 'Zettabyte',
            to: 'Yottabyte',
        });

        expect(
            zettabyteToYottabyte(1000)
        ).toBe(1);
    });

});

describe('Conversion to one unit lower', () => {

    test('Convert 1 Megabyte to Kilobyte', () => {
        const megabyteToKilobyte = snakebyte({
            from: 'Megabyte',
            to: 'Kilobyte',
        });
        
        expect(
            megabyteToKilobyte(1)
        ).toBe(1000);
    });

    test('Convert 1 Gigabyte to Megabyte', () => {
        const gigabyteToMegabyte = snakebyte({
            from: 'Gigabyte',
            to: 'Megabyte',
        });

        expect(
            gigabyteToMegabyte(1)
        ).toBe(1000);
    });

    test('Convert 1 Terabyte to Gigabyte', () => {
        const terabyteToGigabyte = snakebyte({
            from: 'Terabyte',
            to: 'Gigabyte',
        });
        
        expect(
            terabyteToGigabyte(1)
        ).toBe(1000);
    });

    test('Convert 1 Petabyte to Terabyte', () => {
        const petabyteToTerabyte = snakebyte({
            from: 'Petabyte',
            to: 'Terabyte',
        });

        expect(
            petabyteToTerabyte(1)
        ).toBe(1000);
    });

});

describe('Conversion to one unit lower with decimals', () => {

    test('Convert 1.001 Megabyte to Kilobyte', () => {
        const megabyteToKilobyteDec = snakebyte({
            from: 'Megabyte',
            to: 'Kilobyte',
        });

        expect(
            megabyteToKilobyteDec(1.001)
        ).toBe(1001);
    });

});

describe('Conversion from a fraction down', () => {

    test('Convert 0.001 Megabyte to Kilobyte', () => {
        const megabyteToKilobyteDec1 = snakebyte({
            from: 'Megabyte',
            to: 'Kilobyte',
        });

        expect(
            megabyteToKilobyteDec1(0.001)
        ).toBe(1);
    });

    test('Convert 0.000001 Gigabyte to Kilobyte', () => {
        const gigabyteToKilobyte = snakebyte({
            from: 'Gigabyte',
            to: 'Kilobyte',
        });

        expect(
            gigabyteToKilobyte(0.000001)
        ).toBe(1);
    });

    test('Convert 0.000000001 Terabyte to Kilobyte', () => {
        const terabyteToKilobyte = snakebyte({
            from: 'Terabyte',
            to: 'Kilobyte',
        });

        expect(
            terabyteToKilobyte(0.000000001)
        ).toBe(1);
    });

    test('Convert 0.000000000001 Petabyte to Kilobyte', () => {
        const petabyteToKilobyte = snakebyte({
            from: 'Petabyte',
            to: 'Kilobyte',
        });

        expect(
            petabyteToKilobyte(0.000000000001)
        ).toBe(1);
    });

    test('Convert 0.000000000000001 Exabyte to Kilobyte', () => {
        const exabyteToKilobyte = snakebyte({
            from: 'Exabyte',
            to: 'Kilobyte',
        });

        expect(
            exabyteToKilobyte(0.000000000000001)
        ).toBe(1);
    });

    test('Convert 0.000000000000000001 Zettabyte to Kilobyte', () => {
        const exabyteToKilobyte = snakebyte({
            from: 'Zettabyte',
            to: 'Kilobyte',
        });

        expect(
            exabyteToKilobyte(0.000000000000000001)
        ).toBe(1);
    });

    test('Convert 0.000000000000000000001 Yottabyte to Kilobyte', () => {
        const yottabyteToKilobyte = snakebyte({
            from: 'Yottabyte',
            to: 'Kilobyte',
        });

        expect(
            yottabyteToKilobyte(0.000000000000000000001)
        ).toBe(1);
    });

});
