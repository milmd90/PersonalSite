import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className={this.props.theme +' post'}>
                    <div className="post-body">
                        <p className="center">
                             I am a frontend web developer working at OrderMyGear in Dallas. <br/>
                             I also enjoy playing guitar and eating sandwiches. <br/>
                             This website is a work in progress.
                         </p>
                     </div>
                 </div>
            </div>
        );
    }
};

export default Home;
