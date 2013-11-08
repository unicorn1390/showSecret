/**
 * Created with JetBrains WebStorm.
 * User: andycall
 * Date: 8/11/13
 * Time: 9:20 PM
 * To change this template use File | Settings | File Templates.
 */
var worker = new Worker('js/ajax.js');
worker.addEventListener('message',getResponse(),false);

function sendAjax(data,type,callback){
	data.type = type;
	console.log(data);
	worker.postMessage(data);//发送json对象到work
}

function getResponse(){
	return function(e){
		if(e.data === 'failed'){
			alert('发送失败。= = 。。');
		}
		else if(e.data === "success"){
			alert('发送成功！ Yeah~~');
		}
	}
}