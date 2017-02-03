var React = require('react');

var Section = require('./Section.jsx');

var Blog = React.createClass({
    render: function() {
        return (
            <div>
                <div>Blog</div>
                {/* <Section className="bkg-blue"/>
                <Section className="bkg-orange"/>
                <Section className="bkg-green"/> */}
            </div>
        );
    }
});

module.exports = Blog;
