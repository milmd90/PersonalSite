import React, { Component } from 'react';
import UncleUbers from './../posts/UncleUbers';
import Design from './../posts/Design';
import CreatureFeatures from './../posts/CreatureFeatures';

class Personal extends Component {
    render() {
        return (
            <div className="page">
                <UncleUbers
                    theme="bkg-pink"
                />
                <Design
                    theme="bkg-green"
                />
                <CreatureFeatures
                    theme="bkg-blue"
                />
            </div>
        );
    }
};

export default Personal;
