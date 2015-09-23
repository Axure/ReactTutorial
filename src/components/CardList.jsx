var React = require('react');
var Card = require('./Card.jsx');

var CardList = React.createClass({
    render: function() {
        var cards = [];
        var rawCardsData = this.props.cardsData;
        for (var i = 0; i < rawCardsData.length; ++i) {
            cards.push(<Card data={rawCardsData[i]}/>)
        }
        return (
            <div>
                {cards}
            </div>
        )

    }
});

module.exports = CardList;