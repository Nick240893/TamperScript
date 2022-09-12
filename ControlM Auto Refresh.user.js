// ==UserScript==
// @name         ControlM Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       NigroN
// @match        http://cattolica-icinga1/ControlM/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
// @grant        none
// ==/UserScript==

(function() {
    var timer=120; //secondi
    function reload() {
        $('button.d-button.d-button_action.d-icon-refresh.ng-scope').click()
        console.log("Ultima Esecuzione: " + ('0' + new Date().getHours()).slice(-2) +":"+ ('0' + new Date().getMinutes()).slice(-2) +":"+ ('0' + new Date().getSeconds()).slice(-2));
    }
setInterval(reload, Math.round(timer*1000));
})();
