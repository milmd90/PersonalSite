import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class Presentation extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Machine Learning Presentation"
                            link={this.props.link}
                            created="21 July 2017"
                />
                <div className="post-body">
                    <div className="ib ib-8">
                        <p>
                            I gave a presentation on the fundamentals of machine learning.
                            The material was borrowed heavily from the MOOC course "Learning from Data" taught at
                            CalTech by Professor Yaser Abu-Mostafa. I highly recommend taking this course though either
                            <a href="https://work.caltech.edu/telecourse.html"> CalTech</a> or <a href="https://www.edx.org/"> edx</a>.
                        </p>
                        <p>
                            My presentation slides are available for download
                            <a href="https://drive.google.com/file/d/0B9M8gvCUnx5_UWNSTkRzZy00Sjg/view?usp=sharing"> HERE</a>.
                        </p>
                    </div>
                    <div className="ib ib-4">
                        <img className="center" src="/img/datascience/learningfromdata.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Presentation;
