/** @type {import("postcss-load-config").Config} */
const config = {
	syntax: "postcss-scss",
	plugins: [
		require("autoprefixer"),
		require("postcss-import"),
		require("postcss-mixins"),
		//require("postcss-simple-vars"),
		require("postcss-advanced-variables"),
		require("postcss-nested"),
		require("postcss-calc"),
		require("postcss-sort-media-queries"),
		require("postcss-preset-env")({
			features: {
				"nesting-rules": false,
				"custom-properties": {
				preserve: true
				}
			},
			stage: 1,
			preserve: false
		}),
		require("cssnano")
	]
}

module.exports = config