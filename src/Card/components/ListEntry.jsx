var React = require('react');

var ListEntry = React.createClass({
    render: function () {
        return (
            <li>{this.props.entry}: {this.props.content}</li>
        )
    }
});

module.exports = ListEntry;