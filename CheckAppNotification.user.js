// ==UserScript==
// @name         CheckAppNotification
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       NigroN
// @match        https://checkapp2.pages.dev/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_notification
// ==/UserScript==
(function() {
    function jsSysNotification(a,b) {GM_notification({title:a,text:b})}
    unsafeWindow.jsSysNotification=jsSysNotification;
})();
