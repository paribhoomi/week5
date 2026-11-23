
module.exports = {
    testEnvironment: "jsdom",

    transform: {
        "^.+\\.[jt]sx?$": "babel-jest"
    },

    setupFiles: ["<rootDir>/src/polyfills.js"],

    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],

    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },

    testMatch: [
        "**/tests/**/*.test.[jt]s?(x)",
        "**/__tests__/**/*.test.[jt]s?(x)"
    ],

    collectCoverageFrom: [
        "src/components/**/*.{js,jsx}",
        "src/context/**/*.{js,jsx}",
        "src/utils/**/*.{js,jsx}",
        "src/data/**/*.{js,jsx}"
    ],

    clearMocks: true
};
