// ==UserScript==
// @name       Osmose Test Script
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://baking911.com/*
// @copyright  2012+, You
// ==/UserScript==
//document.getElementsByClassName('header_ad')[0].innerHTML=""
//document.getElementsByClassName('header_ad')[0].parentNode.removeChild(document.getElementsByClassName('header_ad')[0])
//window.tdiff = []; fred = function(a,b){return a-b;};

var osmose = function (element, index, array){ 
    if(element.id.indexOf("aswift") == 0){
        console.log("e="+element);
         console.log("e.prent="+element.parentNode);

        element.parentNode.removeChild(element)
    }
}
window.onload = function (){
    console.log("document.readyState ="+document.readyState);
    if (document.readyState == "complete") {
        var ayes = document.getElementsByTagName("iframe");
        for(var i = 0, len = ayes.length; i < len; ++i) {
            console.log("processing " +ayes[i]);
            try{osmose(ayes[i],i,ayes);}catch(e){};
    	}
    }
}



