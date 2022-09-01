// ==UserScript==
// @name         Service-Now Reloader
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       NigroN
// @include      https://*.service-now.com/*
// @include      http://*.service-now.com/*
// @grant        none
// ==/UserScript==

(function() {
    var timer=120; //secondi
    function loop() {
        if (document.visibilityState != "visible") {
            if ((/navpage\.do|home\.do|dashboard\.do/.test(window.location.href))) {
                document.location.reload(true);
            }
        }
    }
    setInterval(loop, Math.round(timer*1000));
    setTimeout(function(){console.log("Ultima Esecuzione: " + ('0' + new Date().getHours()).slice(-2) +":"+ ('0' + new Date().getMinutes()).slice(-2) +":"+ ('0' + new Date().getSeconds()).slice(-2))}, 1000)
})();
