import React, { Component } from 'react';

import Resume from '../posts/Resume';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <Resume/>
            </div>
        );
    }
};

export default Home;
