// ==UserScript==
// @name         Cookie_Edit
// @version      0.1
// @include      https://nos.it.accenture.com/
// @grant        GM_cookie
// ==/UserScript==

function cookieList() {
GM_cookie('list', { name: "io_chs_italy_sso" }, (cookies) => {
    if (cookies[0].sameSite != "no_restriction") {
        GM_cookie('delete',cookies[0])
        cookies[0].sameSite = "no_restriction"
        GM_cookie('set',cookies[0])
    }
    unsafeWindow.cookies=cookies;
});
}
function cookieSet() {
    GM_cookie('delete',cookies[0])
    Object.keys(cookies[0]).forEach(function(key) {if (key=="sameSite") {cookies[0][key]="no_restriction"}})
    GM_cookie('set',cookies[0])
    cookieList();
}
unsafeWindow.cookieSet=cookieSet;
unsafeWindow.cookieList=cookieList;
cookieList();



