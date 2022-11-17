// ==UserScript==
// @name         FixSplunk
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       NigroN
// @include      https://mooneycloud.splunkcloud.com/it-IT/app/cr_event_management/console_events*
// @include      https://mooneycloud.splunkcloud.com/en-US/app/cr_event_management/console_events*
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
// @grant        none
// ==/UserScript==

(function() {
setInterval(fix, 500);

function fix() {
$('.btn.btn-primary.modal-btn-confirm').each(function(i){
    if (this.parentNode.parentNode.innerText.includes('Continue with external content')) {this.click()}
})
}
})();
