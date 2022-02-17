const config = {
  verbose: true,
  moduleNameMapper: {
    '^.*\\.scss$': '<rootDir>/test/unit/stubs/style.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
	testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}', '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'],
	transform: {
		'^.+\\.(js|jsx|mjs)$': '<rootDir>/config/jest/jest-transformer.js'
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
}
module.exports = config;