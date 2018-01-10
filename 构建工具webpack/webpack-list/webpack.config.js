var webpack = require('webpack');
var uglifyjsplugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	entry:['./js/app.js','./js/a.js'],
	output:{
		filename:"js/main.js"
	},
	plugins:[
		new uglifyjsplugin()
	]
}
