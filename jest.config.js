import('ts-jest').JestConfigWithTsJest

const {defaults} = require('jest-config')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    }
  },
  moduleFileExtensions: [
    'tsx',
    ...defaults.moduleFileExtensions
 ],
globals: {
  __DEV__: true
},
moduleDirectories: ['node_modules'],
setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
 transformIgnorePatterns: [
  "node_modules/(?!(jest-)?react-native|react-native|@react-native-community|@react-native|@react-navigation)"]
};