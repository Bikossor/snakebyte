type DecimalUnit =
  | "Byte"
  | "Kilobyte"
  | "Megabyte"
  | "Gigabyte"
  | "Terabyte"
  | "Petabyte"
  | "Exabyte"
  | "Zettabyte"
  | "Yottabyte";

type DecimalUnitMap = {
  [key in DecimalUnit]: number;
};

const mapDecimalUnit: DecimalUnitMap = {
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

type snakebyteOptions = {
  from?: DecimalUnit;
  to: DecimalUnit;
  fractions?: number;
};

export const snakebyte =
  (options: snakebyteOptions) =>
  (input: number): number => {
    if (!options.from) {
      options.from = "Byte";
    }

    if (!options.fractions) {
      options.fractions = 3;
    }

    const expo = mapDecimalUnit[options.from] - mapDecimalUnit[options.to],
      expoAbsPow = Math.pow(10, Math.abs(expo));

    return parseFloat(
      (
        Math.round((input * Math.pow(10, expo) + Number.EPSILON) * expoAbsPow) /
        expoAbsPow
      ).toFixed(options.fractions),
    );
  };
