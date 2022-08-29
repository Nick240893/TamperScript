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
    var editMode = "g"; //document.getElementById("ctl00_PlaceHolderMain_WikiField_ctl00_ctl00_TextField_inplacerte_layoutsTable");
    if (editMode && !(document.getElementById("clippyMgmtTlt"))) {
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
