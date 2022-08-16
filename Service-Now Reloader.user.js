// ==UserScript==
// @name         Service-Now Reloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NigroN
// @include      https://*.service-now.com/*
// @include      http://*.service-now.com/*
// @grant        none
// ==/UserScript==

(function() {
    var tmp=120;
    var time=Math.round(tmp*1000);
     function loop() {
        if (document.visibilityState != "visible") {
            document.location.reload(true);
        } else {
            setTimeout(loop, time);
        }
    }
    setTimeout(loop, time);
})();
