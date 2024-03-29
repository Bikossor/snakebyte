# snakebyte

Convert between different byte units

[![Node.js CI](https://github.com/Bikossor/snakebyte/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/Bikossor/snakebyte/actions/workflows/node.js.yml)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/snakebyte.svg)
![npm](https://img.shields.io/npm/dm/snakebyte.svg)
![GitHub issues](https://img.shields.io/github/issues/bikossor/snakebyte.svg)
![GitHub](https://img.shields.io/github/license/bikossor/snakebyte.svg)

## Installation

### Node.js environment

```
npm i snakebyte
```

### Browser environment

Download the latest version of snakebyte [here](https://github.com/Bikossor/snakebyte/releases/latest).

## Usage

### Node.js environment

```javascript
const { snakebyte } = require("snakebyte");

const kilobyteToMegabyte = snakebyte({
  from: "Kilobyte", // optional, defaults to "Byte"
  to: "Megabyte",
  fractions: 2, // optional, defaults to 3
});

kilobyteToMegabyte(1000);
// => 1
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/bikossor/snakebyte/tags) on this repository.

## Authors

- [Bikossor](https://github.com/Bikossor)

See also the list of [contributors](https://github.com/bikossor/snakebyte/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see [here](LICENSE) for more details.
