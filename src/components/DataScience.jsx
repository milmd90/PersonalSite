import React, { Component } from 'react';
import Presentation from './../posts/Presentation';

class DataScience extends Component {
    render() {
        return (
            <div className="page">
                <Presentation
                    theme="bkg-green"
                    link="/posts/presentation"
                />
            </div>
        );
    }
};

export default DataScience;
