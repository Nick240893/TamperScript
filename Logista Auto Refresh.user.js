// ==UserScript==
// @name         Logista Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NigroN
// @match        https://www.logista.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=logista.com
// @grant        none
// ==/UserScript==

(function() {
	function refresh() {
        var el = document.getElementsByClassName("x-btn-text");
		for (var X=0; X<el.length; X++) {
			if (el[X].innerText.includes("Refresh")) {
				el[X].click();
                setTimeout(refresh, 30000);
			}
		}
	}

	refresh();
})();
