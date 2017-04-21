import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
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
                        <Link to="/sammies">SAMMIES</Link>
                    </span>
                    <span className="header-link">
                        <Link to="/music">MUSIC</Link>
                    </span>
                </div>
                <div className="logo">
                    <img src="/public/assets/logo_black.png" alt="MDM"/>
                </div>
                <div className="buffer"></div>
            </div>
        );
    }
};

export default Header;
