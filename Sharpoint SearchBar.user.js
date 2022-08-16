// ==UserScript==
// @name         Sharpoint SearchBar
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       NigroN
// @include      https://ts.accenture.com/sites/CommandCenter2/wiki/SitePages/Home.aspx
// @grant        none
// ==/UserScript==

(function() {
	async function testo(string){
		var tab = document.getElementById("layoutsTable").getElementsByTagName("a")
		if (!(input.value == "")) await hide("none")
		for (var X=0; X<tab.length; X++) {
			if (!(tab[X].href.toUpperCase().replace(/.*\//gi,"").replace(/\.[A-Z]*$/gi,"").includes(string.toUpperCase())) && !(tab[X].lastChild.alt.toUpperCase().replace(/\.[A-Z]*/g,"").includes(string.toUpperCase()))) {
				tab[X].style.display="none"
				var Z=0; var parente=tab[X].parentNode.getElementsByTagName("a");
				for (var Y=0; Y<parente.length; Y++) {
					if (parente[Y] && parente[Y].style && parente[Y].style.display && parente[Y].style.display.includes("none")) {Z+=1}
					if (Z && Z == parente.length) {tab[X].parentNode.style.display="none"}
				}
			} else {
				tab[X].style.display=""
				tab[X].parentNode.style.display=""
				if (input.value == "") {hide()}
			}
		}
	}

	function hide(strings){
		if (!strings) {var strings=""}
		var tab = document.getElementById("layoutsTable").getElementsByClassName("ms-rte-layoutszone-inner")[0].childNodes
		for (var X=0; X<tab.length; X++) {
            if (tab[X].data && (tab[X].data.includes("\n"))) {continue}
			tab[X].style.display=strings
		}
	}




var x = document.getElementById("layoutsTable").insertRow(0)
x.id="myRowForSearch"
var y = x.insertCell(0)
y.id="myCellForSearch"
y.style.textAlign="center"
var input = document.createElement('input');
input.id="myInputForSearch"
input.placeholder="Cerca"
input.oninput = () => {testo(input.value);}
y.appendChild(input);
input.focus()

})();
