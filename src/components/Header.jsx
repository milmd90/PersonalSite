import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/blog">Blog</Link>
            </div>
        );
    }
};

export default Header;
