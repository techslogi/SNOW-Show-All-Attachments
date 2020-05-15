// ==UserScript==
// @name         SNOW Show All Attachments
// @namespace    http://tampermonkey.net/
// @version      0.5
// @updateURL    https://github.com/techslogi/SNOW-Show-All-Attachments/raw/master/SNOW%20Show%20All%20Attachments.user.js
// @downloadURL	 https://github.com/techslogi/SNOW-Show-All-Attachments/raw/master/SNOW%20Show%20All%20Attachments.user.js
// @description  Increases the size of the attachment list from SNOW.
// @author       Gabriel Vicente
// @match        *://itsmgbpeu.service-now.com/*
// ==/UserScript==

(function() {
    'use strict';

    //Creates a function that will receive the css parameter as a string, creates the element with your chosen style and appends it to the current id, class, whatever you tell it to.
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    //Necessary after Orlando version
    var attachments = document.getElementsByClassName('attachment_list_items');
    for (var i = 0, len = attachments.length; i < len; i++) {
        var attachment = attachments[i];
        attachment.classList.remove("hidden");
    }

    var badges = document.getElementsByClassName('plus_more');
    if (badges[0]){
        badges[0].classList.add("hidden");
    }

    //Header ids responsible for emails and their respective styles which will be overwritten.
    addGlobalStyle('#header_attachment { overflow: hidden !important; height: auto !important; }');
    addGlobalStyle('#header_attachment_list { max-height: 100px !important; width: 100% !important; overflow-y: scroll !important; padding-right: 17px !important; box-sizing: content-box !important;}');
    //Styles for the list. Floats left so they're equal, same to their width and height. Also puts a grid around them.
    addGlobalStyle('.attachment_list_items { display: inline-block !important; height: 30px !important; overflow: hidden !important; float: left !important; width: 300px !important; border: 1px solid !important; border-color: #bdc0c4 !important; }');
	//No need to have this since all attachments are being shown.
	addGlobalStyle('#more_attachments { display: none !important;}');
	//This one shows after attaching something, and displaces the list. No need for it since we have the paperclip icon.
	addGlobalStyle('#header_attachment_list_label { display: none !important;}');

})();