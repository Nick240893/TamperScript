// ==UserScript==
// @name         Sharpoint SearchBar
// @namespace    http://tampermonkey.net/
// @version      2.5
// @description  try to take over the world!
// @author       NigroN
// @include      https://ts.accenture.com/*
// @grant        none
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
// ==/UserScript==

(function() {
	async function search(string){
		var els = document.getElementById("layoutsTable").getElementsByTagName("a");
		if (!(input.value == "")) await hide("none");
		 for (var el of els) {
			if ((el.href.toUpperCase().replace(/.*\//gi,"").replace(/\.[A-Z]*$/gi,"").includes(string.toUpperCase())) || (el.lastChild.alt.toUpperCase().replace(/\.[A-Z]*/g,"").includes(string.toUpperCase()))) {
				el.style.display="";
				el.parentNode.style.display="";
				if (input.value == "") {hide()};
			} else {
                el.style.display="none";
			}
		}
	};

	function hide(arg){
        var state=''
		if (arg) {state=arg;}
		var els = document.getElementById("layoutsTable").getElementsByClassName("ms-rte-layoutszone-inner")[0].childNodes;
		 for (var el of els) {
			if (el.data && (el.data.includes("\n"))) {continue};
			el.style.display=state;
		}
	};

    document.title = document.title.replace(/commandcenter - /gi,"");
	if (window.location.href.includes('sites/CommandCenter2/wiki/SitePages/Home.aspx')) {
        document.addEventListener("keypress", function (e) {if (e.key==='Enter'){null}})
        var width = document.getElementById("layoutsTable").clientWidth
        var div = document.createElement('div');
        div.id = 'myDivForSearch'
        div.classList.add("cssInputContainer");
        var input = document.createElement('input');
		input.id="myInputForSearch";
        input.placeholder="Cerca";
		input.oninput = () => {search(input.value)};
        $(div).appendTo("body");
		$(input).appendTo(div);
        $(input).focusout(function(){input.focus()});
        $(".cssInputContainer").css({"display": "block", "position": "fixed", "bottom": "10px", "left": "1px", "font-size": "10px", "padding": "20px","user-select":"none"});
        $("#myInputForSearch").css({"text-align": "", "width": "166px", "font-size": "20px"});
        input.focus();
	}

})();
