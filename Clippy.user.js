// ==UserScript==
// @name         Clippy
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       NigroN
// @match        https://ts.accenture.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    //edit mode o //view mode?
    (function(){
        var editMode = "g"; //document.getElementById("ctl00_PlaceHolderMain_WikiField_ctl00_ctl00_TextField_inplacerte_layoutsTable");
        var viewMode = "g"; //document.getElementById("layoutsTable");
        if (editMode && !(document.getElementById("clippyMgmtTlt"))) {
            var div = document.createElement('div');
            div.classList.add("cssButtonContainer");
            div.innerHTML = "\
                <div id='clippyMgmtTlt' class='cssTiTleToTop  cssStyleButton'>Clippy Manager</div><br><br>\
                <div id='clippyMgmtAdd' class='cssButtonToTop cssStyleButton'>Aggiungi</div><br> \
                <div id='clippyMgmtRmv' class='cssButtonToTop cssStyleButton'>Elimina</div><br>\
                <div id='clippyMgmtAll' class='cssButtonToTop cssStyleButton'>Elimina Tutto</div><br>"
            $(div).appendTo("body");
            $(".cssButtonContainer").css({"display": "block", "position": "fixed", "bottom": "20px", "left": "10px", "font-size": "5px", "padding": "20px","user-select":"none","text-align": "center"});
            $(".cssStyleButton").css({"font-size": "18px", "border": "none", "outline": "none", "background-color": "#C1C1C1", "color": "white"});
            $(".cssButtonToTop").css({"display": "", "cursor": "", "padding": "5px","width":"60%", "margin":"0 auto"});
            $(".cssTiTleToTop").css({"width": "-moz-min-content", "padding": "5px", "background-color": "#0050FE", "color": "white"});
        } else if (!(editMode) && (viewMode)) {
            var el = document.createElement('textarea');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.id = 'clippyTextArea'
            document.body.appendChild(el);
        }
    })();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function clippy(text) {
          if (window.tst != undefined) {return} else {window.tst=1};
          el.value = text.innerText.replace(/\n*$/gi,"");;
          el.select();
          document.execCommand('copy');
          el.value=''
          el.select();
          var bkp = (text.style.color === undefined) ? '' : text.style.color;
          text.style.color = 'red';
          setTimeout(function(){text.style.color = bkp; window.tst=undefined;} ,300)
    }

    window.clippy=clippy;

    var el = document.createElement('textarea');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.id = 'clippyTextArea'
    document.body.appendChild(el);

    var els = document.getElementsByClassName('clippy');
    var edt = document.getElementById("ctl00_PlaceHolderMain_WikiField_ctl00_ctl00_TextField_inplacerte_layoutsTable");
    for (var X=0; X< els.length; X++) {
        console.log(els[X]);
        els[X].setAttribute("onClick", "clippy(this);");
        if (!(edt)) {els[X].style.color = "#009ac3"};
    }


})();
