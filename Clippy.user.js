// ==UserScript==
// @name         Clippy
// @namespace    http://tampermonkey.net/
// @version      2.9
// @description  try to take over the world!
// @author       NigroN
// @match        https://ts.accenture.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
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
            if (els[0]) {for (var el of els) {$(el).contents().unwrap()}}
            if (spn.parentNode.classList.contains('clippy')) {$(spn).contents().unwrap();}
            selection.removeAllRanges();
            core();
        }
    }

    function rmvClippy(mode) {
        window.getSelection().removeAllRanges();
        var els = Array.from(document.getElementsByClassName('clippy'));
        if (mode && mode=='enable') {
            els.forEach (el => {
                el.setAttribute("onClick", "$(this).contents().unwrap(); rmvClippy('chk')");
            })
            clippyMgmtRmv.style.backgroundColor='red';
            clippyMgmtRmv.setAttribute("onClick", "rmvClippy('disable')");
        }
        if (mode && mode=='disable') {core()};
        if (mode && mode=='chk' && !(els[0])) {
            clippyMgmtRmv.style.backgroundColor='#C1C1C1';
            clippyMgmtRmv.style.cursor=''
            clippyMgmtRmv.setAttribute("onClick", "");
            clippyMgmtAll.style.backgroundColor='#C1C1C1';
            clippyMgmtAll.style.cursor=''
            clippyMgmtAll.setAttribute("onClick", "");
        }
    }

    function rmvAllClippy() {
        var msg = 'ATTENZIONE!!!\nSei sicuro di voler eliminare Clippy in tutta la pagina?\nQuesta azione è irreveribile.'
        if (confirm(msg) == true) {
            var els = Array.from(document.getElementsByClassName('clippy'));
            var lng = els.length;
            els.forEach (el => {$(el).contents().unwrap()});
            core();
        }
    }

    function clippyMgmtSwitch() {
        var els = document.getElementsByClassName('cssButtonToTop');
        var lng = Math.round(els.length-1);
        var mode='';
        if (els && els[lng] && els[lng].style.display=='none') { mode=''}
        if (els && els[lng] && !(els[lng].style.display=='none')) { mode='none'}
        for (var el of els) {el.style.display=mode}
    }

    function unstyled() {
        var els = Array.from(document.getElementsByClassName('clippy'));
        els.forEach (el => {
            el.setAttribute("onClick", "");
            el.style.color = ""
            el.style.textDecoration = "";
            el.style.cursor=''
        })
    }

    //view mode function
    function clippy(text) {
        if (window.clippyIstnt != undefined) {return} else {window.clippyIstnt=1};
        var el = document.getElementById("clippyTextArea");
        el.value = text.innerText.replace(/([\n]*$|^[\n]*)/gi,"").replace(/(^[	]*|[	]*$)/gi, '').replace(/(^[ ]*|[ ]*$)/gi, '');
        el.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        var bkp = (text.style.color === undefined) ? '' : text.style.color;
        text.style.color = 'red';
        setTimeout(function(){text.style.color = bkp; window.clippyIstnt=undefined;} ,300)
    }

    function core() {
        var els = Array.from(document.getElementsByClassName('clippy'));
        if (editMode) {
            clippyMgmtTlt.setAttribute("onClick", "clippyMgmtSwitch();");
            if (els[0]) {
                clippyMgmtRmv.style.backgroundColor='#0050FE';
                clippyMgmtRmv.style.cursor='pointer'
                clippyMgmtRmv.setAttribute("onClick", "rmvClippy('enable');");
                clippyMgmtAll.style.backgroundColor='#0050FE';
                clippyMgmtAll.style.cursor='pointer'
                clippyMgmtAll.setAttribute("onClick", "rmvAllClippy()");
            } else {
                clippyMgmtRmv.style.backgroundColor='#C1C1C1';
                clippyMgmtRmv.style.cursor=''
                clippyMgmtRmv.setAttribute("onClick", "");
                clippyMgmtAll.style.backgroundColor='#C1C1C1';
                clippyMgmtAll.style.cursor=''
                clippyMgmtAll.setAttribute("onClick", "");
            }
        }
        els.forEach (el => {
            el.setAttribute("onClick", "clippy(this);");
            el.style.color = "#009ac3"
            el.style.textDecoration = "underline";
            el.style.cursor='pointer'
        })
    }

    //edit mode o //view mode?
    (function(){
        window.editMode = document.getElementById("ctl00_PlaceHolderMain_WikiField_ctl00_ctl00_TextField_inplacerte_layoutsTable");
        if (editMode && !(document.getElementById("clippyMgmtTlt"))) {
        //edit Mode
            var div = document.createElement('div');
            div.id = 'clippyMgmtContainer'
            div.classList.add("cssButtonContainer");
            div.innerHTML = "\
                <div id='clippyMgmtTlt' class='cssTiTleToTop  cssStyleButton'>Clippy Manager</div><br><br>\
                <div id='clippyMgmtAdd' class='cssButtonToTop cssStyleButton'>Aggiungi</div><br> \
                <div id='clippyMgmtRmv' class='cssButtonToTop cssStyleButton'>Elimina</div><br>\
                <div id='clippyMgmtAll' class='cssButtonToTop cssStyleButton'>Elimina Tutto</div><br>"
            $(div).appendTo("body");
            $(".cssButtonContainer").css({"display": "block", "position": "fixed", "bottom": "20px", "left": "10px", "font-size": "5px", "padding": "20px","user-select":"none","text-align": "center"});
            $(".cssStyleButton").css({"font-size": "18px", "border": "none", "outline": "none", "background-color": "#C1C1C1", "color": "white"});
            $(".cssButtonToTop").css({"padding": "5px","width":"60%", "margin":"0 auto"});
            $(".cssTiTleToTop").css({"width": "-moz-min-content", "cursor": "pointer", "padding": "5px", "background-color": "#0050FE", "color": "white"});
            window.clippyMgmtTlt=document.getElementById('clippyMgmtTlt');
            window.clippyMgmtAdd=document.getElementById('clippyMgmtAdd');
            window.clippyMgmtRmv=document.getElementById('clippyMgmtRmv');
            window.clippyMgmtAll=document.getElementById('clippyMgmtAll');
            //fix save button
            var sve = document.getElementById("ctl00_PageStateActionButton");
            var cmd = sve.getAttribute('onclick');
            sve.setAttribute('onclick', '(async function(){await unstyled();'+cmd+'})()')
            //select
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
        }
        document.addEventListener("keydown", function (e) {
            if (e.shiftKey && (e.key === 'C' || e.key === 'Z')) {
                var el = document.getElementById("clippyTextArea");
                el.value = window.getSelection().toString().replace(/([\n]*$|^[\n]*)/gi,"").replace(/(^[	]*|[	]*$)/gi, '').replace(/(^[ ]*|[ ]*$)/gi, '');
                el.select();
                document.execCommand('copy');
            }
        })
        var el = document.createElement('textarea');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.id = 'clippyTextArea'
        document.body.appendChild(el);
        window.core=core;
        window.clippy=clippy;
        window.unstyled=unstyled;
        window.addClippy=addClippy;
        window.rmvClippy=rmvClippy;
        window.rmvAllClippy=rmvAllClippy;
        window.clippyMgmtSwitch=clippyMgmtSwitch;
    })();
    core();

})();


