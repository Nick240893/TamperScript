// ==UserScript==
// @name         GDH
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  try to take over the world!
// @author       NigroN
// @match        http://52.148.214.162/nagiosxi/*
// @grant        none
// ==/UserScript==

(function() {
    var bs64="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH2SURBVDjLldPLSxtRFAbwm7ooUheuSn2iQqHtLkZTFGsXShA3LYUi2FJR8VWhuhC6iFAfiEZRE0jUUNDGNKVVxIJUSnGj4APFQhf9D0pCXs1z8tav9wyJjI9ovfAxA3PPb+4Z5jAAjK98HgWP8ooU8dygmlRYElBEIhFvPB4/SiQSuCj8OfR6ve4skgKUVBwMBiEIwkl8Ph88Hg/sdruI2Gw2GAyGUwgtGQG0IRwOIxqNildKIBCA1+uFw+EQgVAoBHqJ0WgUkXMAFadCABX4/X44nc5zLSW/iewUwNs42UD31HeqFZfLJZ7EarWmB85GitBJ6Hu43e7/B6RI76dqtC3I4fY4rwdQYrEYuswVGFxrRMPcPYQiwauBHssjvPlYgc7FcrTMy9G/+hxLBzr0LT+BSpuDrLyMx5cC3eaH+PpzBiuHerHw84EW2o0+mHbH0WlRoXz05tEDtSw7LdDK+6XiqR890Hzvxsh6OwbWmjH0rQNzW8N4+aEKd9+xRFrgxfv7+LKvhWVvEqadccxvj3HkNWa3htBuqUORmv3NfcvkUuBYCjybLUG9Lh+107dRNZGNVwuVmNkcQItZhTLNHWRVsgbpLJTxv0/ghWmHSTF2C02mGig1efj955dAAygFCgi5bJSL+1m4UJ2BzFL2NDn6BVT7D+X3feV2c5mYAAAAAElFTkSuQmCC"
    var empty="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    var timer=2;
    document.getElementById("fullscreen").click()
    function fix() {
        setTimeout(function(){console.log("Ultima Esecuzione: " + ('0' + new Date().getHours()).slice(-2) +":"+ ('0' + new Date().getMinutes()).slice(-2) +":"+ ('0' + new Date().getSeconds()).slice(-2))}, 1000);
        var els = document.getElementById('maincontentframe').contentWindow.document.getElementsByTagName("img");
       for (var el of els) {
            el.alt="";
            if (el.src.includes("page_white_go.png")) {
                el.src = "data:image/png;base64," + bs64
            }
            if (!(el.src.includes("data:image/png;base64")) && !(el.src.includes("page_white_go.png"))) {
                el.src = "data:image/png;base64," + empty
            }
        }
    }
    setInterval(fix, Math.round(timer*1000))
    //document.getElementById('maincontentframe').contentWindow.document.addEventListener("change", setTimeout(fix, 1000), false)
})();
