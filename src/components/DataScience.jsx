import React, { Component } from 'react';
import Presentation from './../posts/Presentation';

class DataScience extends Component {
    render() {
        return (
            <div className="page">
                <Presentation
                    link="/posts/presentation"
                />
            </div>
        );
    }
};

export default DataScience;
