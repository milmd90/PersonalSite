import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class CreatureFeatures extends Component {
    render() {
        return (
            <div className='post post-color'>
                <PostHeader title="Creature Features"
                            link={this.props.link}
                            created="22 April 2017"
                />
                <div className="grid-wrapper div-nest">
                    <div className="grid-4">
                        <img className="center" src="/img/music/creaturefeatures.jpg" alt="creature features"/>
                    </div>
                    <div className="grid-8">
                        <p>
                            <a className="show-link" target="_blank"
                                href="https://soundcloud.com/creature-features-448133117">Here </a>
                            are three tracks I recorded with my friend, David Bergen, under the name Creature Features.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default CreatureFeatures;
