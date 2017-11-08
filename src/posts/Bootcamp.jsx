import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class Bootcamp extends Component {
    render() {
        return (
            <div className='post post-color'>
                <PostHeader title="SMU Bootcamp"
                            link={this.props.link}
                            created="6 August 2017"
                />
                <div className="grid-wrapper div-nest">
                    <div className="grid-4">
                        <img className="center" src="/img/smu/smulogo.png" alt="smu"/>
                    </div>
                    <div className="grid-8">
                        <p>
                            I just got accepted as an instructor for the Full Stack coding bootcamp at SMU!
                        </p>
                        <p>
                            The course is 6 months long and covers: HTML5, CSS3, JavaScript, jQuery, Node.js,
                            Java, Express.js, React.js, Database Theory, Bookshelf.js, MongoDB, MySQL,
                            Command Line, Git, and more!
                        </p>
                        <p>
                            To learn more about this opportunity, check out the
                            bootcamp website
                            <a className='show-link' target="_blank"
                                href='https://codingbootcamp.smu.edu/'> here</a>.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Bootcamp;
