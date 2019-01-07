# eslint-config-sanjagh

This is the shareable ESLint config that we use at sanjagh for our javascript projects

## Installation

run `npm info eslint-config-sanjagh peerDependencies` to list peer dependencies and then install each dependency with your desired package manager

```sh
# npm
npm install --save-dev <dependency>@<version>

# yarn
yarn add --dev <dependency>@<version>
```

Install the config itself
```sh
# npm
npm install --save-dev eslint-config-sanjagh

# yarn
yarn add --dev eslint-config-sanjagh
```

Note: if you're using npm >= 5 you can use this command
```sh
npx install-peerdeps --dev eslint-config-sanjagh
```

## Usage

Once you have done with installation add `sanjagh` to `extends` part of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring)

JSON `.eslintrc.json`:
```json
{
  "extends": "sanjagh"
}
```

YAML `.eslintrc.yml`:
```yaml
extends:
  - sanjagh
```

Js: `.eslintrc.js`:
```js
module.exports = {
  extends: 'sanjagh',
};
```
## License

[MIT](./LICENSE) © Sanjagh
