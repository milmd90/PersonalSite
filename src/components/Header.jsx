import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import $ from 'jquery';

class Header extends Component {
    componentDidMount() {
        this.$logo_div = $('.logo');
        this.$logo = $('.logo img');
        this.$links = $('.header-links');

        this.scroll_max = 150;
        this.logo_max = 200;
        this.logo_min = 80;
        this.header_width = 750;

        this.center = $(window).width() / 2;
        this.scroll = $(document).scrollTop();

        document.addEventListener("scroll", () => {
            this.scroll = $(document).scrollTop();
            this.setPositions();
        });
        window.addEventListener('resize', () => {
            this.center = $(window).width() / 2;
            this.setPositions();
        });
        this.setPositions();
    }

    setPositions() {
        var transition = this.scroll / this.scroll_max < 1 ? this.scroll / this.scroll_max : 1;

        this.$logo_div.css({
            top: 80 * (1 - transition) + 'px',
            left: (this.center - this.logo_max/2) * (1 - transition) + 'px',
            margin: 0,
        });

        var size = this.logo_max - ((this.logo_max - this.logo_min) * transition);
        this.$logo.css({
            width: size + 'px',
            height: size + 'px',
        });

        this.$links.css({
            right: (this.center - this.header_width/2) * (1 - transition) + 'px',
        });
    }

    render() {
        return (
            <div className="header">
                <div className="mask"></div>
                <div className="header-links">
                    <div className="header-link">
                        <IndexLink to="/">HOME</IndexLink>
                    </div>
                    <div className="header-link">
                        <Link to="/resume">RESUME</Link>
                    </div>
                    <div className="header-link">
                        <Link to="/software">SOFTWARE</Link>
                    </div>
                    <div className="header-link">
                        <Link to="/datascience">DATA SCIENCE</Link>
                    </div>
                    <div className="header-link">
                        <Link to="/personal">PERSONAL</Link>
                    </div>
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
