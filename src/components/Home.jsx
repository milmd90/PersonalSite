import React, { Component } from 'react';

import HomePost from '../posts/HomePost';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <HomePost/>
            </div>
        );
    }
};

export default Home;
