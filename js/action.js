

function $$(id){
		return typeof id === 'string' ? document.getElementById(id) : id;
}

function getClass(classname){
    return Array.prototype.slice.call(document.getElementsByClassName(classname),0);
}
var addLoadEvent = function addLoadEvent(func){
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

var addClass = function addClass(element,value){
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

var removeClass = function removeClass(element,value){
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

var curry = function curry(fn,scrope){
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


var writeCookie = function writeCookie(name,value,days){
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

var readCookie = function readCookie(name){
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

var eraseCookie =  function eraseCookie(name){
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
var click_praise = getClass('click_praise');
for(var i = 0, len = click_praise.length; i< len ;  i += 1 ){
	click_praise[i].addEventListener('click',praise(),false);
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






