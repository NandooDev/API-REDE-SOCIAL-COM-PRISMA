export default{
    testEnvironment: 'node',
    testMatch: ['**/__test__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(X)'],
    transform: {'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'}
};