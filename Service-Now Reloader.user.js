// ==UserScript==
// @name         Service-Now Reloader
// @namespace    http://tampermonkey.net/
// @version      2.5
// @description  try to take over the world!
// @author       NigroN
// @include      https://*.service-now.com/*home.do*
// @include      https://*.service-now.com/*dashboard.do*
// @include      https://*.service-now.com/*navpage.do*
// @grant        none
// ==/UserScript==

(function() {
    function loop() {
        if (document.visibilityState != "visible" && (/navpage\.do|home\.do|dashboard\.do/.test(window.location.href))) {
            try {homeRefresh()} catch {document.location.reload(true)}
        }
    }

    var timer=120; //secondi
    setInterval(loop, Math.round(timer*1000));
    setTimeout(function(){console.log("Ultima Esecuzione: " + ('0' + new Date().getHours()).slice(-2) +":"+ ('0' + new Date().getMinutes()).slice(-2) +":"+ ('0' + new Date().getSeconds()).slice(-2))}, 1000)
})();
