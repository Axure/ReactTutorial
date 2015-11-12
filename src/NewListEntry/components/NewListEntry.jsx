var React = require('react');
var ReactPropTypes = React.PropTypes;

var ListEntry = React.createClass({

    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        onSave: ReactPropTypes.func.isRequired,
        value: ReactPropTypes.string
    },
    /**
     * Set the initial state from the initial properties.
     * @returns {{value: (*|string)}}
     */
    getInitialState: function () {
        return {
            value: this.props.value || ''
        };
    },

    render: function () {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                value={this.state.value}
                autoFocus={true}
                onChange={this._onChange}
            />
        )
    },

    _onChange: function(/*object*/ event) {
        this.setState({
            value: event.target.value
        });
    },
});

module.exports = ListEntry;