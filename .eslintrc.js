module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
    ],
    "parser":  '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "semi": "off",
        "@typescript-eslint/semi": [
            "error",
            "never", 
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error", {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": false,
                }
            }
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
    }
}