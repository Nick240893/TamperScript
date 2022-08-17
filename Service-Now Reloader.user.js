// ==UserScript==
// @name         Service-Now Reloader
// @namespace    http://tampermonkey.net/
// @version      1.2
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
            if ((/navpage\.do|home\.do|dashboard\.do/.test(window.location.href))) {
                document.location.reload(true);
            } else {
                setInterval(loop, time);
            }
        } else {
            setInterval(loop, time);
        }
    }
    setInterval(loop, time);
})();
