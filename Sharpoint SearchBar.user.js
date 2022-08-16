// ==UserScript==
// @name         Sharpoint SearchBar
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       NigroN
// @include      https://ts.accenture.com/*
// @grant        none
// ==/UserScript==

(function() {
	async function search(string){
		var tab = document.getElementById("layoutsTable").getElementsByTagName("a");
		if (!(input.value == "")) await hide("none");
		for (var X=0; X<tab.length; X++) {
			if (!(tab[X].href.toUpperCase().replace(/.*\//gi,"").replace(/\.[A-Z]*$/gi,"").includes(string.toUpperCase())) && !(tab[X].lastChild.alt.toUpperCase().replace(/\.[A-Z]*/g,"").includes(string.toUpperCase()))) {
				tab[X].style.display="none";
				var Z=0; var parente=tab[X].parentNode.getElementsByTagName("a");
				for (var Y=0; Y<parente.length; Y++) {
					if (parente[Y] && parente[Y].style && parente[Y].style.display && parente[Y].style.display.includes("none")) {Z+=1};
					if (Z && Z == parente.length) {tab[X].parentNode.style.display="none"};
				}
			} else {
				tab[X].style.display="";
				tab[X].parentNode.style.display="";
				if (input.value == "") {hide()};
			}
		}
	};

	function hide(state){
		if (!(state)) {var state=""}
		var tab = document.getElementById("layoutsTable").getElementsByClassName("ms-rte-layoutszone-inner")[0].childNodes;
		for (var X=0; X<tab.length; X++) {
			if (tab[X].data && (tab[X].data.includes("\n"))) {continue};
			tab[X].style.display=state;
		}
	};

	if (window.location.href.includes('sites/CommandCenter2/wiki/SitePages/Home.aspx')) {
		var x = document.getElementById("layoutsTable").insertRow(0);
		x.id="myRowForSearch";
		var y = x.insertCell(0);
		y.id="myCellForSearch";
		y.style.textAlign="center";
		var input = document.createElement('input');
		input.id="myInputForSearch";
		input.placeholder="Cerca";
		input.oninput = () => {search(input.value)};
		y.appendChild(input);
		input.focus();
		var css = window.document.styleSheets[0];
		css.insertRule('#myInputForSearch[placeholder] {text-align: center;}', css.cssRules.length);
	}
    document.title = document.title.replace(/commandcenter - /gi,"");

})();
