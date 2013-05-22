// ==UserScript==
// @name       Osmose Test Script
// @namespace  http://use.i.E.your.homepage/
// @version    0.4
// @description  enter something useful
// @match      http://www.aayisrecipes.com/*
// @copyright  2012+, You
// ==/UserScript==

var osmose = function (element,attribute, search){ 
    var p = element;
    p[attribute] = (p[attribute] || "");
    if(p[attribute].indexOf(search) > 0){
        while(p){
            console.log("parent=<"+p.tagName+ " "+attribute+ ": "+p[attribute]+">");
            if(p.tagName.toLowerCase() == "div"){
                //found the fist div
                p.innerHTML="";
                console.log("Blanking out <div id: "+(p[id]||"")+">");
                break;
            }
            p = p.parentNode;
        }
    }
}
//See for dynamic insertion
//http://stackoverflow.com/questions/6197768/dynamic-adsense-insertion-with-javascript

var hideAllAds  = function (){
    console.log("document.readyState ="+document.readyState);
    var targetObjects = [ 
        {"ename":"aside","attribute":"id","search":"adsense_widget"},
        {"ename":"div","attribute":"id","search":"adsense_widget"},
        {"ename":"div","attribute":"id","search":"gpt-ad"},
        {"ename":"script","attribute":"src","search":"pagead2.googlesyndication"}
    ];
    for(var i =0;i<targetObjects.length;i++){
        var ayes = document.getElementsByTagName(targetObjects[i].ename);
        for(var j = 0, len = ayes.length; j < len; ++j) {
            try{osmose(ayes[j],targetObjects[i].attribute,targetObjects[i].search);}catch(e){};
        }
    }
}
/*
 * try{
    hideAllAds();
}catch(e){
}
*/

/*
    jQuery's document.ready/$(function(){}) should
    you wish to use a cross-browser DOMReady solution
    without opting for a library.

    Demo: http://jsfiddle.net/zKLpb/

    usage:
    $(function(){
         // your code
    });

    Parts: jQuery project, Diego Perini, Lucent M.
    This version: Addy Osmani
*/
(function( window ) {
    "use strict";

    // Define a local copy of $
    var $ = function( callback ) {
            readyBound = false;
            $.isReady = false;
            if ( typeof callback === "function" ) {
                DOMReadyCallback = callback;
            }
            bindReady();
        },

        // Use the correct document accordingly with window argument (sandbox)
        document = window.document,
        readyBound = false,
        DOMReadyCallback = function() {},

        // The ready event handler
        DOMContentLoaded = function() {
            if ( document.addEventListener ) {
                    document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
            } else {
                    // we're here because readyState !== "loading" in oldIE
                    // which is good enough for us to call the dom ready!
                    document.detachEvent( "onreadystatechange", DOMContentLoaded );
            }
            DOMReady();
        },

        // Handle when the DOM is ready
        DOMReady = function() {
            // Make sure that the DOM is not already loaded
            if ( !$.isReady ) {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if ( !document.body ) {
                    return setTimeout( jQuery.ready, 1 );
                }
                // Remember that the DOM is ready
                $.isReady = true;
                // If there are functions bound, to execute
                DOMReadyCallback();
                // Execute all of them
            }
        }, // /ready()

        bindReady = function() {
            var toplevel = false;

            if ( readyBound ) {
                return;
            }
            readyBound = true;

            // Catch cases where $ is called after the
            // browser event has already occurred.
            if ( document.readyState !== "loading" ) {
                DOMReady();
            }

            // Mozilla, Opera and webkit nightlies currently support this event
            if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                // A fallback to window.onload, that will always work
                window.addEventListener( "load", DOMContentLoaded, false );
                // If IE event model is used
            } else if ( document.attachEvent ) {
                // ensure firing before onload,
                // maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", DOMContentLoaded );
                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", DOMContentLoaded );
                // If IE and not a frame
                // continually check to see if the document is ready
                try {
                    toplevel = window.frameElement == null;
                } catch (e) {}
                if ( document.documentElement.doScroll && toplevel ) {
                    doScrollCheck();
                }
            }
        },

        // The DOM ready check for Internet Explorer
        doScrollCheck = function() {
            if ( $.isReady ) {
                return;
            }
            try {
                // If IE is used, use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                document.documentElement.doScroll("left");
            } catch ( error ) {
                setTimeout( doScrollCheck, 1 );
                return;
            }
            // and execute any waiting functions
            DOMReady();
        };

    // Is the DOM ready to be used? Set to true once it occurs.
    $.isReady = false;

    // Expose $ to the global object
    window._OSMOSE_ON_LOAD_ = $;

})( window );
_OSMOSE_ON_LOAD_(hideAllAds());

