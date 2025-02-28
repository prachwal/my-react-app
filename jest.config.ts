export default {
  preset: "ts-jest", // Still use the preset for simplicity
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.ts"], // Updated path
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy", // Handles CSS imports
  },
  testPathIgnorePatterns: ["<rootDir>/src/__tests__/setupTests.ts"], // Ignore setup file in tests
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }], // Transform TS files
  },
};
