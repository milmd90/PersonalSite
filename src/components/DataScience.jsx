import React, { Component } from 'react';
import Presentation from './../posts/Presentation';

class DataScience extends Component {
    render() {
        return (
            // TODO allow page to scroll without hardcoding height
            <div className="page" style={{minHeight:700}}>
                <Presentation
                    link="/posts/presentation"
                />
            </div>
        );
    }
};

export default DataScience;
