import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Section extends Component {
    render() {
        return (
            <div className={this.props.className}>
                Section
            </div>
        );
    }
};

export default Section;
