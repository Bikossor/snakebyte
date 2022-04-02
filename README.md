# snakebyte
Convert between different byte units

[![Node.js CI](https://github.com/Bikossor/snakebyte/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/Bikossor/snakebyte/actions/workflows/node.js.yml)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1a444123eb7c4bdbacd7325a0fe8e5ee)](https://www.codacy.com/app/Bikossor/snakebyte?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Bikossor/snakebyte&amp;utm_campaign=Badge_Grade)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/snakebyte.svg)
![npm](https://img.shields.io/npm/dm/snakebyte.svg)
![GitHub issues](https://img.shields.io/github/issues/bikossor/snakebyte.svg)
![GitHub closed issues](https://img.shields.io/github/issues-closed/bikossor/snakebyte.svg)
![GitHub](https://img.shields.io/github/license/bikossor/snakebyte.svg)

## Installing
### Node.js environment
```
npm i snakebyte --save
```

### Browser environment
Download the latest version of snakebyte [here](https://github.com/Bikossor/snakebyte/releases/latest).

## Usage
### Node.js environment

```javascript
const { snakebyte } = require('snakebyte');

const kilobyteToMegabyte = snakebyte({
    from: 'Kilobyte', // optional, defaults to "Byte"
    to: 'Megabyte',
    fractions: 2, // optional, defaults to 3
});

kilobyteToMegabyte(1000);
// => 1
```

## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/bikossor/snakebyte/tags) on this repository. 

## Authors
- [Bikossor](https://github.com/Bikossor)

See also the list of [contributors](https://github.com/bikossor/snakebyte/contributors) who participated in this project.

## License
This project is licensed under the GPL-3.0 License - see [here](LICENSE) for more details.