var React = require('react');

var Section = require('./Section.jsx');

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div>Home</div>
                <Section className="bkg-blue"/>
                <Section className="bkg-orange"/>
                <Section className="bkg-green"/>
            </div>
        );
    }
});

module.exports = Home;
