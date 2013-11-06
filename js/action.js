

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
	else{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
};

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

//显示出评论框
   var comments = getClass('click-comment');
   for(var i = 0, len = comments.length; i < len ; i++){
       console.log(comments[i]);
      comments[i].addEventListener('click',toggle(),false);
      comments[i].addEventListener('click',toggle().false);
   }

 function toggle(){
     return function(){
         console.log('123');
         $$('comment-box').style.bottom = window.getComputedStyle($$('comment-box')).getPropertyCSSValue('bottom');
         if( $$('comment-box').style.bottom === '-80px'){
             $$('comment-box').style.bottom = "0px";
         }
         else{
             $$('comment-box').style.bottom = "-80px";
         }
     }

 }


//登陆框表单验证
$$('vitua_submit').addEventListener('click',function(){
    var commentText = $$('comment-message').value;
    console.log(commentText);
//     $$('submit').click();

    $$('comment-box').style.bottom = "-80px";
    $$('comment-message').value = "";
})










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






