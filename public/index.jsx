import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from '../src/components/App';

ReactDOM.render(<App />, document.getElementById('root'));

var $logo_div = $('.logo');
var $logo = $('.logo img');
var $links = $('.header-links');
var center = $( window ).width()/2 - 100;

$(document).scroll(function() {
    var l = $(this).scrollTop();
    if (l > 150) l = 150;
    var size = 200 + ((80 - 200) * l/150);

    $logo.css({
        width: size + 'px',
        height: size + 'px'
    });
    $logo_div.css({
        top: 80 * (1 - l/150) + 'px',
        left: center * (1 - l/150) + 'px',
        margin: 0,
    });
    $links.css({
        width: 100 - l/3+'%'
    });
});
