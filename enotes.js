// ==UserScript==
// @name         Enotes
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  asdfghjkl
// @author       Anon
// @include      https://www.enotes.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var remove = document.querySelectorAll(".waterfall-mount")[0];
    var unhide = document.getElementsByClassName("answer-body__text");
    var xooo = unhide.length-1;
    console.log(unhide);
    remove.parentNode.removeChild(remove);
    while (xooo>=0){
        unhide[xooo].setAttribute("class", unhide[xooo].classList.remove("hidden"));
        xooo--;
    }
})();
