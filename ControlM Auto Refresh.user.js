// ==UserScript==
// @name         ControlM Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        http://cattolica-icinga1/ControlM/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    var timer=120; //secondi
    function reload() {
        document.getElementsByClassName("d-button d-button_action d-icon-refresh ng-scope")[1].click();
        setTimeout(function(){console.log("Ultima Esecuzione: " + ('0' + new Date().getHours()).slice(-2) +":"+ ('0' + new Date().getMinutes()).slice(-2) +":"+ ('0' + new Date().getSeconds()).slice(-2))}, 1000);
    }
setInterval(reload, Math.round(timer*1000));
})();
