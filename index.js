var snakebyte = (function () {
    var decimalBase = 10,
        binaryBase = 2;

    return {
        get Kilobyte() {
            return 3;
        },
        get Megabyte() {
            return 6;
        },
        get Gigabyte() {
            return 9;
        },
        get Terabyte() {
            return 12;
        },
        get Petabyte() {
            return 15;
        },
        get Exabyte() {
            return 18;
        },
        get Zettabyte() {
            return 21;
        },
        get Yottabyte() {
            return 24;
        },
        convert: function (number, unitFrom, unitTo) {
            var exponent = unitFrom - unitTo;

            if (exponent === 0) {
                return number;
            }

            var res = Math.round(number * Math.pow(decimalBase, exponent)),
                fractions = exponent < 0 ? Math.abs(exponent + unitFrom - 1) : 0;

            return Number.parseFloat(res);
        }
    };
})();

if (typeof module !== "undefined" && module.exports) {
    module.exports = snakebyte;
}