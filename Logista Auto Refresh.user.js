// ==UserScript==
// @name         Logista Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       NigroN
// @match        https://www.logista.com/sm/index.do*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=logista.com
// @grant        none
// ==/UserScript==

(function() {
    var timer=120; //secondi
	function refresh() {
        var els = document.getElementsByClassName("x-btn-text");
		for (var el of els) {if (el.innerText.includes("Refresh")) {el.click()}};
         console.log("Ultima Esecuzione: " + ('0' + new Date().getHours()).slice(-2) +":"+ ('0' + new Date().getMinutes()).slice(-2) +":"+ ('0' + new Date().getSeconds()).slice(-2))
	}
	setInterval(refresh, Math.round(timer*1000));
})();
