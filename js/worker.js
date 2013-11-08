/**
 * Created with JetBrains WebStorm.
 * User: andycall
 * Date: 8/11/13
 * Time: 9:20 PM
 * To change this template use File | Settings | File Templates.
 */

var worker = new Worker('ajax.js');
worker.addEventListener('message',getResponse(),false);

function sendAjax(data,callback){
		worker.postMessage(data);//发送json对象到work
}

function getResponse(){
	return function(e){
		console.log(e.data);
	}
}