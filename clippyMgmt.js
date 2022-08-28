// ==UserScript==
// @name         Teest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://*
// @include      file:///C:/Users/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
// ==/UserScript==

(function() {
    var editMode = "g" //document.getElementById("ctl00_PlaceHolderMain_WikiField_ctl00_ctl00_TextField_inplacerte_layoutsTable")
    if (editMode && !(document.getElementById("clippyMgmtTlt"))) {
        var div = document.createElement('div');
        div.classList.add("cssButtonContainer");
        div.innerHTML = "\
	    <div onclick='' id='clippyMgmtTlt' class='cssTiTleToTop  cssStyleButton'>Clippy Manager</div><br><br>\
        <div onclick='' id='clippyMgmtAdd' class='cssButtonToTop cssStyleButton'>Aggiungi</div><br> \
        <div onclick='' id='clippyMgmtRmv' class='cssButtonToTop cssStyleButton'>Elimina</div><br>\
        <div onclick='' id='clippyMgmtAll' class='cssButtonToTop cssStyleButton'>Elimina Tutto</div><br>"
        $(div).appendTo("body");
        $(".cssButtonContainer").css({"display": "block", "position": "fixed", "bottom": "20px", "left": "10px", "font-size": "5px", "padding": "20px","user-select":"none","text-align": "center"});
        $(".cssStyleButton").css({"font-size": "18px", "border": "none", "outline": "none", "background-color": "#C1C1C1", "color": "white"});
        $(".cssButtonToTop").css({"display": "", "cursor": "pointer", "padding": "5px","width":"60%", "margin":"0 auto"});
        $(".cssTiTleToTop").css({"width": "-moz-min-content", "padding": "5px", "background-color": "#0050FE", "color": "white"});
    }
})();
