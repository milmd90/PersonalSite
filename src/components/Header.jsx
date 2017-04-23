import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import $ from 'jquery';

class Header extends Component {
    componentDidMount() {
        var $window_width = $(window).width();
        var $logo_div = $('.logo');
        var $logo = $('.logo img');
        var $links = $('.header-links');

        var logo_max = 200;
        var logo_min = 80;
        var header_min = 150;

        var center = ($window_width - logo_max) / 2;

        $(document).scroll(function() {
            var transition = $(this).scrollTop() / header_min;
            if (transition > 1) transition = 1;
            var size = logo_max - ((logo_max - logo_min) * transition);

            $logo_div.css({
                top: 80 * (1 - transition) + 'px',
                left: center * (1 - transition) + 'px',
                margin: 0,
            });
            $logo.css({
                width: size + 'px',
                height: size + 'px',
            });

            $links.css({
                width: 100 - (transition * 47) +'%',
            });
        });
    }

    render() {
        return (
            <div className="header">
                <div className="mask"></div>
                <div className="header-links">
                    <span className="header-link">
                        <IndexLink to="/">HOME</IndexLink>
                    </span>
                    <span className="header-link">
                        <Link to="/resume">RESUME</Link>
                    </span>
                    <span className="header-link">
                        <Link to="/software">SOFTWARE</Link>
                    </span>
                    <span className="header-link">
                        <Link to="/datascience">DATA SCIENCE</Link>
                    </span>
                    <span className="header-link">
                        <Link to="/personal">PERSONAL</Link>
                    </span>
                </div>
                <div className="logo">
                    <img src="/img/logo/logo_black.png" alt="MDM"/>
                </div>
                <div className="buffer"></div>
            </div>
        );
    }
};

export default Header;
