// ==UserScript==
// @name         DuckDuckGo - Search on Google link
// @version      1
// @description  Adds a 'Search on Google' link to the DuckDuckGo search results
// @author       Yani
// @match        https://github.com/yanikore/duckduckgo-search-on-google-link/blob/master/duckduckgo-search-on-google-link.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var anchor = document.createElement("a");

    anchor.href = "#";
    anchor.text = "Search on Google";

    anchor.addEventListener('click', function(event){
        let q = document.getElementById('search_form_input').value;
        let q_encoded = encodeURIComponent(q).replace(/%20/g, '+');
        let url = 'https://www.google.com/search?q=' + q_encoded;

        document.location = url;
    });

    document.getElementsByClassName('js-search-filters')[0].appendChild(anchor);
})();