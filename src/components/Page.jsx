var React = require('react');

var Section = require('./Section.jsx');

var Page = React.createClass({
    render: function() {
        return (
            <div>
                <Section className="bkg-blue"/>
                <Section className="bkg-orange"/>
                <Section className="bkg-green"/>
            </div>
        );
    }
});

module.exports = Page;
