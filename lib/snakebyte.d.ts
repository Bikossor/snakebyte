declare type DecimalUnit = "Byte" | "Kilobyte" | "Megabyte" | "Gigabyte" | "Terabyte" | "Petabyte" | "Exabyte" | "Zettabyte" | "Yottabyte";
declare type snakebyteOptions = {
    from?: DecimalUnit;
    to: DecimalUnit;
    fractions?: number;
};
export declare const snakebyte: (options: snakebyteOptions) => (input: number) => number;
export {};
