module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg|mp4)$": [
      "<rootDir>/src/app/shared/assets/images/emptyModule.js",
      "<rootDir>/src/app/shared/assets/videos/emptyModule.js"
    ]
  }
}
