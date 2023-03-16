import { Config } from 'jest'

const config: Config = {
  "transform": {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  }
}

module.exports = {
  "testEnvironment": "jsdom"
}



export default config