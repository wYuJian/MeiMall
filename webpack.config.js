var path = require("path");
module.exports = {
	entry:"./src/components/component.js",
	output:{
		path:path.resolve(__dirname,"./src/components"),
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test:/\.js$/,
			loader:"babel-loader",
			exclude:/(node_modules)/,
			query:{
				presets:["es2015","react"]
			}
		},
		{
			test:/\.css$/,
			loader:"style-loader!css-loader"
		}]
	}
}
