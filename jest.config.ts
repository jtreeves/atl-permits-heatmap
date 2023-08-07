export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/configurations/setupTests.ts'],
    testMatch: ['<rootDir>/tests/{unit,integration}/**/*.{test,spec}.{ts,tsx}']
}
