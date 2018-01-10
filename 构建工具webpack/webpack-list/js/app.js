(function(global,foctory){
	
	global.crea = foctory();
	
})(window,function(){
	var div = document.createElement("div");
	var body1 = document.getElementsByTagName("body")[0];
	div.className="box";
	var crea = {
		creatElement:function(){
			body1.appendChild(div);
		}
	}
	return crea;
});
console.log(crea);
crea.creatElement();