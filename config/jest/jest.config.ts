import path from "path";

export default {
  globals: {
    __IS_DEV__: true,
    __API__: "",
    __PROJECT__: "jest",
  },
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": path.resolve(
      __dirname,
      "jestEmptyComponent.tsx"
    ),
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // ДОБАВЬТЕ ЭТУ СЕКЦИЮ
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  // КОНЕЦ ДОБАВЛЕНИЯ
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "<rootDir>/reports/unit",
        filename: "report.html",
        inlineSource: true,
      },
    ],
  ],
};
