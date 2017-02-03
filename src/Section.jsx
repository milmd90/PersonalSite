var React = require('react');

var Section = React.createClass({
    render: function() {
        return (
            <div className={this.props.className}>
                Section
            </div>
        );
    }
});

module.exports = Section;
