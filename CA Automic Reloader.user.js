// ==UserScript==
// @name         CA Automic Reloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       NigroN
// @include      http://10.183.247.68*
// @include      http://10.183.247.69*
// @include      http://10.147.247.68*
// @grant        none
// ==/UserScript==

(function() {
    var timer= Math.round(new Date().getTime()/1000);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState == "visible" && window.location.href.includes("overview&")) {
            var now = Math.round(new Date().getTime()/1000);
            if (Math.round(now - timer) > 20) {document.location.reload(true)};
        }
    });
})();
