//webpack支持: AMD  commonjs   es6 exports 
require('./my.js');
//require('style-loader!css-loader!../css/style.css');
require('../css/style.css');
function fun(str){
	console.log(str);
}
fun("this is jcf!!!");
