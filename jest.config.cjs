module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  watch: false, 
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/user-event'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',  
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/.jest/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};

