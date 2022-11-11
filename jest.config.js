module.exports = {
  globals: {
    // "ts-jest": {
    //   tsconfig: "tsconfig.json",
    // },
  },
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: {
    "^/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/(tests|src)/.*\\.(test|spec))\\.(jsx?|tsx?)$",
  testEnvironment: "node",
  maxWorkers: 1,
  //
  coverageDirectory: "./tests/coverage/",
  // collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "src/**", // tudo dentro de src
  ],

  coverageProvider: "v8",
};
