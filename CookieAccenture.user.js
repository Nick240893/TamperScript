// ==UserScript==
// @name         Cookie_Edit
// @version      0.1
// @include      https://nos.it.accenture.com/
// @grant        GM_cookie
// ==/UserScript==

function cookieAcc() {
    GM_cookie('list', { name: "io_chs_italy_sso" }, (cookies) => {
        unsafeWindow.editCookies="no"
        if (cookies[0].sameSite != "no_restriction") {
            GM_cookie('delete',cookies[0])
            cookies[0].sameSite = "no_restriction"
            GM_cookie('set',cookies[0])
            unsafeWindow.editCookies="yes"
        }
        unsafeWindow.cookies=cookies;
    });
}
unsafeWindow.cookieAcc=cookieAcc;
cookieAcc();



