var React = require('react');
var ListEntry = require('./ListEntry.jsx');

var List = React.createClass({
    render: function () {
        var entries = [];
        var rawEntries = this.props.entries;
        for (var i = 0; i < rawEntries.length; ++i) {
            entries.push(<ListEntry entry={rawEntries[i].entry} content={rawEntries[i].content}/>)
        }
        return (
            <ul>
                {entries}
            </ul>
        );
    }
});

module.exports = List;