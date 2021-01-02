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
};

export const snakebyte = (options: snakebyteOptions) => (input: number): number => {
  if (!options.from) {
    options.from = "Byte";
  }

  const fromUnit = mapDecimalUnit[options.from],
    toUnit = mapDecimalUnit[options.to],
    exponent = fromUnit - toUnit,
    fractions = exponent < 0
      ? Math.abs(exponent + fromUnit)
      : 0;

  return parseFloat((input * Math.pow(10, exponent)).toFixed(fractions));
};
