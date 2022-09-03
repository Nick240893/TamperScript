// ==UserScript==
// @name         Clippy
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  try to take over the world!
// @author       NigroN
// @match        https://ts.accenture.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
// ==/UserScript==

(function() {

    //edit mode function
    function clippyMgmtSwitch() {
        var mode= ($('.cssButtonToClippy').css('display')=='none') ? '' : 'none';
        $('.cssButtonToClippy').css({'display': mode})
    };

    function addClippy() {
        var selection = window.getSelection();
        var string = selection.toString();
        if ( string != '' && !(/^[ 	]*$/gi.test(string)) ) {
            var range = selection.getRangeAt(0);
            var spn = document.createElement("span");
            $(spn).addClass('clippy');
            $(range.extractContents()).appendTo(spn);
            range.insertNode(spn);
            $('span.clippy:empty').remove();
            var els=spn.getElementsByClassName('clippy')
            $(els).contents().unwrap()
            if (spn.parentNode.classList.contains('clippy')) {$(spn).contents().unwrap();}
            selection.removeAllRanges();
            core();
        }
    }

    function rmvClippy(mode) {
        window.getSelection().removeAllRanges();
        if (mode && mode=='disable') {core()};
        if (mode && mode=='enable') {
            $('.clippy').attr("onClick", "$(this).contents().unwrap(); rmvClippy('chk')")
            $('#clippyMgmtRmv').attr("onClick", "rmvClippy('disable')")
            $('#clippyMgmtRmv').css({'background-color':'red'})
        }
        if (mode && mode=='chk' && $('.clippy').length<1) {
            $('.cssStyleRmvClippy').css({"background-color":"#C1C1C1", "cursor":""});
            $('.clippyMgmtRmv').attr("onClick", "")
        }
    }

    function rmvAllClippy() {
        var msg = 'ATTENZIONE!!!\nSei sicuro di voler eliminare Clippy in tutta la pagina?\nQuesta azione è irreveribile.';
        if (confirm(msg) == true) {$('.clippy').contents().unwrap(); core();}
    }

    function clippyEdit(el, arg) {
        if (el.tagName=='SPAN' && !arg) {
            var txt = document.createElement('TEXTAREA');
            var div = document.createElement('div');
            $(div).css({'display':'Inline'});
            txt.value = el.innerText;
            $(txt).addClass('clippyEdit');
            $(txt).focusout(function(){clippyEdit(txt)});
            txt.addEventListener('input', function(){clippyEdit(txt, 'grows')})
            $(txt).appendTo(div);
            $(txt).css({'font-family':'Lucida Console', 'font-weight':'500', "overflow":"hidden", 'resize':'none'});
            el.parentNode.replaceChild(div, el);
            clippyEdit(txt, 'grows');
            txt.focus();
        } else if (el.tagName=='TEXTAREA' && !arg) {
            var sp = document.createElement('span');
            sp.innerText = el.value;
            $(sp).addClass('clippy');
            el.parentNode.parentNode.replaceChild(sp, el.parentNode);
            core();
        } else if (el.tagName=='TEXTAREA' && arg=='grows') {
            $(el).css({'width':''}); $(el).attr('cols', Math.max(...($(el).val().split(/\r\n|\r|\n/).map(n=>{return n.length}))));
            $(el).css({'height':''}); $(el).attr('rows', $(el).val().split(/\r\n|\r|\n/).length)
        }
    };

    function unstyled() {
        $('.clippy').removeAttr('onClick');
        $('.clippy').removeAttr('style');
    };

    //view mode function
    function clippy(el) {
        if (window.clippyIstnt != undefined) {return} else {window.clippyIstnt=1};
        var txt= $(el).text().replace(/([\n]*$|^[\n]*)/gi,"").replace(/(^[	]*|[	]*$)/gi, '').replace(/(^[ ]*|[ ]*$)/gi, '');
        navigator.clipboard.writeText(txt)
        var bkp = $(el).css('color');
        $(el).css({'color':'red'});
        setTimeout(function(){$(el).css({'color':bkp}); window.clippyIstnt=undefined;} ,300);
    };

    function core() {
        if (editMode) {
            if (($('.clippy').length>0)) {
                $('#clippyMgmtRmv').attr('onClick', 'rmvClippy("enable")');
                $('#clippyMgmtAll').attr('onClick', 'rmvAllClippy()');
                $('.cssStyleRmvClippy').css({"background-color":"#0050FE",'color':'white', "cursor":"pointer"});
            } else {
                $('#clippyMgmtRmv').removeAttr('onClick');
                $('#clippyMgmtAll').removeAttr('onClick');
                $('.cssStyleRmvClippy').css({"background-color":"#C1C1C1",'color':'white', "cursor":""});
            }
            $('.clippy').attr('onClick', 'clippyEdit(this)');
            $('.clippy').css({'color':'#009ac3', 'font-family':'monospace', 'cursor':'pointer'});
        } else {
            $('.clippy').attr('onClick', 'clippy(this)');
            $('.clippy').css({'color':'#009ac3', 'font-family':'monospace', 'cursor':'pointer'});
        }
    }

    //edit mode o //view mode?
    (function(){
        window.editMode = document.getElementById("ctl00_PlaceHolderMain_WikiField_ctl00_ctl00_TextField_inplacerte_layoutsTable");
        if (editMode && !(document.getElementById("clippyMgmtTlt"))) {
        //edit Mode
            var div = document.createElement('div');
            $(div).attr('id', 'clippyMgmtContainer');
            $(div).addClass('cssButtonContainerToClippy');
            div.innerHTML = "\
                <div id='clippyMgmtTlt' class='cssTiTleToClippy  cssStyleButtonToClippy cssStyleTltClippy'>Clippy Manager</div><br><br>\
                <div id='clippyMgmtAdd' class='cssButtonToClippy cssStyleButtonToClippy cssStyleAddClippy'>Aggiungi</div><br> \
                <div id='clippyMgmtRmv' class='cssButtonToClippy cssStyleButtonToClippy cssStyleRmvClippy'>Elimina</div><br>\
                <div id='clippyMgmtAll' class='cssButtonToClippy cssStyleButtonToClippy cssStyleRmvClippy'>Elimina Tutto</div><br>"
            $(div).appendTo("body");
            $(".cssButtonContainerToClippy").css({"display": "block", "position": "fixed", "bottom": "20px", "left": "10px", "font-size": "5px", "padding": "20px","user-select":"none","text-align": "center"});
            $(".cssStyleButtonToClippy").css({"font-size": "18px", "border": "none", "outline": "none", "background-color": "#C1C1C1", "color": "white"});
            $(".cssButtonToClippy").css({"padding": "5px","width":"60%", "margin":"0 auto"});
            $(".cssTiTleToClippy").css({"width": "-moz-min-content", "cursor": "pointer", "padding": "5px", "background-color": "#0050FE", "color": "white"});
            $('#clippyMgmtTlt').attr('onClick', 'clippyMgmtSwitch()');
            //fix save button
            var cmd = $('#ctl00_PageStateActionButton').attr('onclick')
            $('#ctl00_PageStateActionButton').attr('onclick', '(async function(){await unstyled();'+cmd+'})()')
            //select
            $('.clippy').change(function(){})
            document.addEventListener("selectionchange", () => {
                var tmp=''; var tagName='TEXTAREA';
                try {tmp=document.getSelection(); tagName=tmp.getRangeAt(0).startContainer.children[0].tagName } catch {return}
                if (tmp.toString() && !(tagName=='TEXTAREA')) {
                    $('#clippyMgmtAdd').css({"background-color":"#0050FE",'color':'white', "cursor":"pointer"});
                    $('#clippyMgmtAdd').attr('onclick', 'addClippy()');
                } else {
                    $('#clippyMgmtAdd').css({"background-color":"#C1C1C1", 'color':'white', "cursor":""});
                    $('#clippyMgmtAdd').attr('onclick', '');
                }
            });
        //edit Mode ended
        }
        window.core=core;
        window.clippy=clippy;
        window.unstyled=unstyled;
        window.addClippy=addClippy;
        window.rmvClippy=rmvClippy;
        window.clippyEdit=clippyEdit;
        window.rmvAllClippy=rmvAllClippy;
        window.clippyMgmtSwitch=clippyMgmtSwitch;
    })();
    core();

})();
