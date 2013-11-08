/**
 * Created with JetBrains WebStorm.
 * User: andycall
 * Date: 8/11/13
 * Time: 9:20 PM
 * To change this template use File | Settings | File Templates.
 */
var worker = new Worker('js/ajax.js');
var isPraise = true;
worker.addEventListener('message',getResponse(),false);

function sendAjax(data,type,elem){
	data.type = type;
	// console.log(data);
	worker.postMessage(data);//发送json对象到work
	return isPraise;
}

function getResponse(){
	return function(e){
		if(e.data === 'failed'){
			alert('发送失败。= = 。。');
			isPraise = false;
		}
		else if(e.data === "success"){
			isPraise = true;
		}
	}
}