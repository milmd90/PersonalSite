import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-links">
                    <span className="header-link">
                        <Link to="/home">HOME</Link>
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
                <div className="mdm-icon">
                    MDM
                </div>
            </div>
        );
    }
};

export default Header;
