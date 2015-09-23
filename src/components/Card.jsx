var React = require('react');
var List = require('./List.jsx');

var Card = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-left">
                    <List entries={this.props.data.textData}/>
                </div>
                <div className="col-right">
                    <img src={this.props.data.imgSrc}/>
                </div>
            </div>
        )
    }
});

module.exports = Card;