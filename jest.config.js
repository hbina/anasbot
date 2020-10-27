module.exports = {
  coveragePathIgnorePatterns: ['dist', 'src/main.ts'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['**/*.test.(ts|js)'],
  testEnvironment: 'node',
};
