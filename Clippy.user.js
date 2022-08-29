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
    
    //edit mode function
    function addClippy() {
        var selection = window.getSelection();
        var string = selection.toString();
        if ( string != '' && !(/^[ 	]*$/gi.test(string)) ) {
            var range = selection.getRangeAt(0);
            var spn = document.createElement("span");
            spn.classList.add('clippy');
            spn.appendChild(range.extractContents());
            range.insertNode(spn); 
            $('span.clippy:empty').remove();
            var els=spn.getElementsByClassName('clippy')
            if (els[0]) {for (var X=0; X< els.length; X++) {$(els[X]).contents().unwrap()}}
            if (spn.parentNode.classList.contains('clippy')) {$(spn).contents().unwrap();}
            selection.removeAllRanges();
            show();
            //console.log(document.getElementById('test2').innerHTML)
            //console.log(selection.anchorNode.parentElement.innerHTML)
        }
    }

    function rmvClippy(mode) {
        window.getSelection().removeAllRanges();
        var els = document.getElementsByClassName('clippy');
        if (mode && mode=='enable') {
            for (var X=0; X< els.length; X++) {
                els[X].setAttribute("onClick", "$(this).contents().unwrap()");
            }
            clippyMgmtRmv.style.backgroundColor='red';
            clippyMgmtRmv.setAttribute("onClick", "rmvClippy('disable')");
        }
        if (mode && mode=='disable') {
        show();
        }
    }
    
    
    //edit mode o //view mode?
    (function(){
        var editMode = "g"; //document.getElementById("ctl00_PlaceHolderMain_WikiField_ctl00_ctl00_TextField_inplacerte_layoutsTable");
        var viewMode = "g"; //document.getElementById("layoutsTable");
        if (editMode && !(document.getElementById("clippyMgmtTlt"))) {
        //edit Mode
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
            window.clippyMgmtTlt=document.getElementById('clippyMgmtTlt');
            window.clippyMgmtAdd=document.getElementById('clippyMgmtAdd');
            window.clippyMgmtRmv=document.getElementById('clippyMgmtRmv');
            window.clippyMgmtAll=document.getElementById('clippyMgmtAll');
            document.addEventListener("selectionchange", () => {
                var tmp=document.getSelection().toString();
                if (tmp) {
                    clippyMgmtAdd.style.backgroundColor='#0050FE'
                    clippyMgmtAdd.style.cursor='pointer'
                    clippyMgmtAdd.setAttribute("onClick", "addClippy()");
                } else {
                    clippyMgmtAdd.style.backgroundColor='#C1C1C1'
                    clippyMgmtAdd.style.cursor=''
                    clippyMgmtAdd.setAttribute("onClick", "");
                }
            });
        //edit Mode ended
        } else if (!(editMode) && (viewMode)) {
        //view Mode
            var el = document.createElement('textarea');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.id = 'clippyTextArea'
            document.body.appendChild(el);
        //view Mode ended
        }
    })();
    show();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
