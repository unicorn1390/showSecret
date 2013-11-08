/**
 * Created with JetBrains WebStorm.
 * User: andycall
 * Date: 7/11/13
 * Time: 10:12 PM
 * To change this template use File | Settings | File Templates.
 */



function $$(id){
		return typeof id === 'string' ? document.getElementById(id) : id;
}

var whenReady = (function(){
    var func = [];
    var ready = false;

    function hander(e){
        if(ready) return ;

        if(e.type == 'readystatechange' && document.readyState !== 'complete'){
            return ;
        }

        for(var i=0; i< func.length; i++){
            func[i].call(document);
        }


        ready = true;
        func = null;
    }

    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',hander,false);
        document.addEventListener('readystatechange',hander,false);
        window.addEventListener('load',hander,false);
    }

    else if(document.attachEvent){
        document.attachEvent('onreadystatechange',hander,false);
        window.attachEvent('onload',hander);
    }


    return function whenReady(f){
         if(ready) f.call(document);
         else func.push(f);
    }
})();


function getClass(classname){
    return Array.prototype.slice.call(document.getElementsByClassName(classname),0);
}
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
};

function addClass(element,value){
	if(!element.className){
		element.className = value;
	}
	if(element.className.indexOf(value) > 0) return;
	else{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
};

function removeClass(element,value){
	if(!element.className) return false;
	if(element.className.indexOf(value) < 0) return false;
	else{
		oldClassName = element.className;
		oldPart1 = oldClassName.substring(0,oldClassName.indexOf(value));
		oldPart2 = oldClassName.substring(oldClassName.indexOf(value) + value.length, oldClassName.length);
		newClassName = oldPart1 + oldPart2;
		element.className =  newClassName;
	}
}

function curry(fn,scrope){
	var scrope = scrope || window;
	var args = [];
	for(var i= 2; i< arguments.length; i ++){
		args.push(arguments[i]);
	}

	return function(){
		var otherArgs = [];
		for(var i =0; i< arguments.length; i++){
			otherArgs.push(arguments[i]);
		}
		var argsTotal = args.concat(otherArgs);
		
		fn.apply(scrope,argsTotal);
	}
};


function writeCookie(name,value,days){
	//By default ,there is no expiration so the cookie is temporary
	var expires = "";

	//Specifying a number of days makes the cookie persistent
	if(days){
		var date = new Date();
		date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
		expires = '; expries=' + date.toGMTString();
	}


	document.cookie = name + '=' + value + expires + '; path=/';
};

function readCookie(name){
	//find the specified cookie and return its value
	var searchName = name + '=';
	var cookie = document.cookie.split(';');
	for(var i =0; i< cookie.length; i++){
		var c = cookie[i];
		while(c.charAt(0) == " ") c = c.substring(1,c.length);
		if(c,indexOf(searchName) == 0) return c.substring(searchName.length,c.length);
	}
	return null;
};

function eraseCookie(name){
	writeCookie(name,"",-12);
};

function addListen(obj,type,handle){
	if(window.addEventListener){
		obj.addEventListener(type,handle,false);
	}
	else if(window.attachEvent){
		obj.attachEvent('on' + type,handle);
	}
	else{
		obj['on' + type] = handle;
	}
}


function praise(){
	return function(){

	}
}

// 滚动条
function changeSlider(index,elem){
	var slider = document.getElementsByClassName('slider')[0];
	var sliderWidth = window.getComputedStyle(slider).width;
	console.log(sliderWidth);
    slider.style.left = (parseInt(sliderWidth) * index)  + 'px';
}

// 修改高度
function changeHeight(index,elem){
	var elemHeight = parseInt(window.getComputedStyle(elem).height);
	getClass('swipe-wrap')[0].style.height = elemHeight + 'px';
}

function addListenToContent(){
	var click_praise = getClass('click-praise');
	for(var i = 0,len = click_praise.length; i < len ; i += 1){
		click_praise[i].addEventListener('click',getPrased(click_praise[i]),false);
	}
}

function getOpenId(){
	return document.getElementById('userId').getAttribute('openid');
}

function getPrased(elem){  //点赞
	var articleId = elem.getAttribute('articleId');
	var openid = getOpenId();
	var data = {
		user_openid : openid,
		sec_id: articleId
	};
	sendAjax(data,"POST"); //发送数据到worker
	// ..................
}


// // 动态topbar
// function getScroll(){
// 	return function(){
// 		var topbar = document.getElementsByClassName('header-bar')[0];
// 		var swipe = document.getElementById('slider');
// 		// console.log(swipe)
// 		// console.log(document.body.scrollTop);	
// 		if(document.body.scrollTop > 0 ){
// 			topbar.style.position = "fixed";
// 			topbar.style.top = "0px";
// 			if(parseInt(window.getComputedStyle(topbar).height) - document.body.scrollTop > 0){
// 				console.log(parseInt(window.getComputedStyle(topbar).height) - document.body.scrollTop);
// 				swipe.style.marginTop = (parseInt(window.getComputedStyle(topbar).height) - document.body.scrollTop) + 'px';
// 			} 
			
// 		}
// 		else{
// 			topbar.style.position = 'static';
// 			swipe.style.marginTop = 0;
// 		}
// 	}
// }
// window.addEventListener('scroll',getScroll(),false);


// 点赞
// 事件队列1
function step1(){
	var click_praise = getClass('click_praise');
	for(var i = 0, len = click_praise.length; i< len ;  i += 1 ){
		click_praise[i].addEventListener('click',praise(),false);
	}
}

whenReady(step1); //队列第一步









//if(!Element.prototype.click){
//	Element.prototype.click = function(handle){
//		console.log('123');
//		return function(obj){
//			addListen(obj,'click',handle);
//		}
//	}
//}


//if(!Element.prototyp){
//    Element.prototype.hello = function(){
//        console.log(this);
//    }
//}




//if(Object.defineProperty){
//    Object.defineProperty(Element.prototype,'click',{
//        get: function(){
//            alert('455');
//        },
//        set: function(){
//           alert('123');
////           return function(obj){
////               addListen(obj,'click',handle);
////           }
//       },
//       enumerable: false,
//       configurable: true
//    })
//}

// addListen($$('click-comment'),'click',function(){
// 	alert('123');
// });






