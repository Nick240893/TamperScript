// ==UserScript==
// @name         FixSplunk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NigroN
// @include      https://mooneycloud.splunkcloud.com/it-IT/app/cr_event_management/console_events*
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
// @grant        none
// ==/UserScript==

(function() {
setInterval(fix, 1000);

function fix() {
    $('.modal.fade.external-url-modal.shared-dialogs-externalurlmodal.in').remove();
    $('.modal-backdrop.fade.in').remove();
    console.log("txt")
}
})();
