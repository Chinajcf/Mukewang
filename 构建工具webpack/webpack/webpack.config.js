//module.exports = {
//	//定义入口文件
//	/*entry:'./js/app.js',
//	//定义出口文件
//	output:{
//		filename:'js/bundle.js'
//	}*/
////打包多个文件
//	entry:{
//		bundle1: './js/app.js',
//		bundle2: './js/footer.js'
//	},
//	output:{
//		filename: './gulp/[name].js'
//	}
//}
/*var webpack = require('webpack');
console.log(webpack.optimize);
//压缩插件
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry:'./web/app.js',
	output:{
		filename:'web/main.js'
	},
	plugins:[
		new UglifyJsPlugin(),
	]
}*/

var webpack = require('webpack');
var uglifyjsplugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	entry:'./lianxi/app.js',
	output:{
		filename:'lianxi/main.js'
	},
	plugins:[
		new uglifyjsplugin()
	]
}
