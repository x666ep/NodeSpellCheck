module.exports =  {
    parser:  '@typescript-eslint/parser',  
    extends:  [
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        node: true,
        mocha: true,
        es6: true
    },
    parserOptions:  {
        ecmaVersion:  2018,
        ecmaFeatures: {
            modules: true
        },
        sourceType:  'module',
    },
    rules:  {
    },
};
