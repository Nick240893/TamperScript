// ==UserScript==
// @name         Cookie_Edit
// @version      0.2
// @include      https://nos.it.accenture.com/*
// @include      https://*/nagiosxi/*
// @description  try to take over the world!
// @author       NigroN
// @grant        GM_cookie
// @require      https://checkapp2.pages.dev/Dipendenze/jQueryUI-Cupertino/external/jquery/jquery.js
// ==/UserScript==

var timer=120;
function cookieAcc() {
    GM_cookie('list',{name:"io_chs_italy_sso"},(cookies) => {
        unsafeWindow.editCookies="no";
        if (cookies[0].sameSite != "no_restriction") {
            GM_cookie('delete',cookies[0]);
            cookies[0].sameSite = "no_restriction";
            GM_cookie('set',cookies[0]);
            unsafeWindow.editCookies="yes: "+('0' + new Date().getHours()).slice(-2) +":"+ ('0' + new Date().getMinutes()).slice(-2) +":"+ ('0' + new Date().getSeconds()).slice(-2);
            console.log(editCookies);
        }
        unsafeWindow.cookies=cookies;
    });
}

unsafeWindow.cookieAcc=cookieAcc;
cookieAcc()


