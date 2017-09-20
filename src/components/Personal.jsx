import React, { Component } from 'react';
import Bootcamp from './../posts/Bootcamp';
import Design from './../posts/Design';
import CreatureFeatures from './../posts/CreatureFeatures';

class Personal extends Component {
    render() {
        return (
            <div className="page">
                <Bootcamp />
                <Design />
                <CreatureFeatures />
            </div>
        );
    }
};

export default Personal;
