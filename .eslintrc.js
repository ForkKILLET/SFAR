module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {},
	"globals": {
		"unsafeWindow": true,
		"GM_getValue": true,
		"GM_setValue": true
	}
};
