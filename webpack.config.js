const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenUI5Plugin = require('openui5-webpack-plugin');

const appPath = path.resolve(__dirname, 'webapp');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
	context: appPath,
	entry: './app.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /manifest\.json$/,
				type: "javascript/auto",
				use: {
					loader: "openui5-manifest-loader",
					options: {
						translations: ["en", "de"],
					},
				},
			},
			{
				test: /@openui5[/\\].*\.js$/,
				use: "openui5-renderer-loader",
			},
			{
				test: /\.xml$/,
				use: 'openui5-xml-loader',
			},
			{
				test: /\.properties$/,
				use: 'raw-loader',
			},
			{
				test: [
					/jquery-ui-position.js$/,
				],
				use: {
					loader: "imports-loader",
					query: "jQuery=sap/ui/thirdparty/jquery",
				},
			},
			{
				test: /jquery-mobile-custom.js$/,
				use: {
					loader: "imports-loader",
					query: "this=>window",
				},
			},
		]
	},
	output: {
		path: path.resolve(buildPath)
	},
	resolve: {
		modules: [
			"node_modules/@openui5/sap.m/src",
			"node_modules/@openui5/sap.ui.core/src",
			"node_modules/@openui5/sap.ui.core/src/sap/ui/thirdparty", // workaround for signals dependency in hasher
			"node_modules/@openui5/sap.ui.support/src",
			"node_modules/@openui5/themelib_sap_belize/src",
			"node_modules"
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunksSortMode: "none",
			template: 'index.html'
		}),
		new OpenUI5Plugin({
			modulePath: "sap/ui/demo/todo",
			libs: ["sap.ui.core", "sap.m"],
			translations: ["en", "de"],
			theme: ["sap_belize", "sap_belize_plus"],
			requireSync: [
				"sap/ui/demo/todo/Component"
			],
			manifest: "./manifest.json"
		}),
		new CopyWebpackPlugin([
			{
				from: 'model/todoitems.json',
				to: 'sap/ui/demo/todo/model'
			},
			{
				from: 'css/styles.css',
				to: 'sap/ui/demo/todo/css'
			},
			{
				context: path.resolve(__dirname, "node_modules/@openui5/sap.ui.core/src"),
				from: {
					glob: "sap/ui/core/themes/base/fonts/**",
				},
			},
			{
				context: path.resolve(__dirname, "node_modules/@openui5/themelib_sap_belize/src"),
				from: {
					glob: "sap/ui/core/themes/sap_belize_plus/fonts/**",
				},
			}
		]),
		/* new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			generateStatsFile: true,
			openAnalyzer: false,
		})*/
	],
	devtool: "source-map",
};
