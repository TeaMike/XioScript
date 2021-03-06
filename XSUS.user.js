// ==UserScript==
// @name           XioScript
// @namespace      Virtonomics
// @description    XioScript using XioLibraries
// @version        10.0.15
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @require        http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require        https://raw.githubusercontent.com/XiozZe/XioScript/Update-trial/XSCF.js
// @require        https://raw.githubusercontent.com/XiozZe/XioScript/Update-trial/XSML.js
// @require        https://raw.githubusercontent.com/XiozZe/XioScript/Update-trial/XSCL.js
// @require        https://raw.githubusercontent.com/XiozZe/XioScript/Update-trial/XSEL.js
// @resource       jQuiCss     https://raw.githubusercontent.com/XiozZe/XioScript/master/jquery-ui.css
// @resource       myCss       https://raw.githubusercontent.com/XiozZe/XioScript/master/XSCSS.css
// @include        http://*virtonomic*.*/*/*
// @exclude        http://virtonomics.wikia.com*
// @grant          GM_getResourceText
// @grant          GM_addStyle
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        XioScript();
    }
}
document.onreadystatechange();
