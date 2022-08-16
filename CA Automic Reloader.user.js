// ==UserScript==
// @name         CA Automic Reloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NigroN
// @include      http://10.183.247.68*
// @include      http://10.183.247.69*
// @include      http://10.147.247.68*
// @grant        none
// ==/UserScript==

(function() {
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState == "visible" && window.location.href.includes("overview&")) {
            document.location.reload(true);
        }
    });
})();
