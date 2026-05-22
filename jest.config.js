module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/index.js'],
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov', 'junit', 'cobertura'],
  reporters: ['default', 'jest-junit'],
  coverageThreshold: {
    global: { lines: 70, branches: 70, functions: 70 }
  }
};
