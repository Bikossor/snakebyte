# snakebyte
Convert between different byte units

## ***Warning! This module is still in development!***

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
const snakebyte = require("snakebyte");

snakebyte.convert(100, snakebyte.Kilobyte, snakebyte.Gigabyte);
// => 0.0001
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