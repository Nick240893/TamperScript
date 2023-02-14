// ==UserScript==
// @name         CheckAppNotification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NigroN
// @includes     file:///*
// @includes     https://checkapp2.pages.dev/*
// @grant        GM_notification
// ==/UserScript==

(function() {
    function jsSysNotification(a,b) {GM_notification({title:a,text:b})}
    unsafeWindow.jsSysNotification=jsSysNotification;
})();
