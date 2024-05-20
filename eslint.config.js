const nodePlugin = require("eslint-plugin-n")

module.exports = [
    nodePlugin.configs["flat/recommended-script"],
    {
        extends: "eslint:recommended",
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: "module",
        },
        rules: {
            "n/exports-style": ["error", "module.exports"],
            "brace-style": ["error", "stroustrup", {"allowSingleLine": true}],
            "comma-dangle": ["error", "always-multiline"],
            "dot-location": ["error", "object"],
            "eol-last": ["error", "always"],
            "eqeqeq": ["error", "always"],
            "global-require": ["error"],
            "indent": ["error", 2, {"SwitchCase": 1}],
            "max-len": ["error", 80],
            "new-parens": ["error"],
            "no-alert": ["error"],
            "no-buffer-constructor": ["error"],
            "no-caller": ["error"],
            "no-else-return": ["error", {"allowElseIf": false}],
            "no-empty": ["error", {"allowEmptyCatch": true}],
            "no-eval": ["error"],
            "no-extend-native": ["error"],
            "no-floating-decimal": ["error"],
            "no-implied-eval": ["error"],
            "no-loop-func": ["error"],
            "no-multi-assign": ["error"],
            "no-multi-spaces": ["error", { "exceptions": { "Property": true, "VariableDeclarator": true, "ImportDeclaration": true } } ],
            "no-new": ["error"],
            "no-new-func": ["error"],
            "no-new-wrappers": ["error"],
            "no-tabs": ["error"],
            "no-throw-literal": ["error"],
            "no-trailing-spaces": ["error"],
            "no-var": ["error"],
            "no-with": ["error"],
            "linebreak-style": ["error", "unix"],
            "one-var": ["error", "never"],
            "prefer-const": ["error"],
            "prefer-numeric-literals": ["error"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "spaced-comment": ["warn", "always"],
            "strict": ["error", "global"],
            "multiline-comment-style": ["error", "separate-lines"],
            "no-unused-vars": ["error", {"args": "none"}]
        }
    }
]