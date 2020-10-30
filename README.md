# mocha-exzeo-reporter

> A Mocha reporter that uses both spec and junit


## Getting Started

Install the reporter as a development dependency:

```sh
npm install mocha --save-dev
npm install mocha-exzeo-reporter --save-dev
```

Update your `package.json` to use the reporter when running Mocha: 

```json
{
  "name": "my-package",
  "version": "0.0.1",
  "scripts": {
    "test": "node_modules/.bin/mocha --reporter mocha-exzeo-reporter test/*.js"
  }
}
```

