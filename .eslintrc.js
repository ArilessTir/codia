module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
	"extends": [
		"plugin:react/recommanded",
		"airbnb",
		"prettier",
	],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",// or warn
        "no-unused-vars": "warn"
    }
}
