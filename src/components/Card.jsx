var ListEntry = React.createClass({
    render: function () {
        return (
            <li>{this.props.entry}: {this.props.content}</li>
        )
    }
})

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
})

var Card = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-left">
                    <List entries={this.props.data.textData} />
                </div>
                <div className="col-right">
                    <img src={this.props.data.imgSrc}/>
                </div>
            </div>
        )
    }
})

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
})

var listData = [
    {entry: "Name", content: "Yulu Chen"},
    {entry: "Age", content: "19"},
    {entry: "Gender", content: "Female"},
    {entry: "Email", content: "lulucici77@gmail.com"},
    {entry: "Intro", content: "A girl"}
]

var cardData = {
    textData: listData,
    imgSrc: "image/233.jpg"
}

var cardsData = [
    cardData,
    cardData,
    cardData,
    cardData
]
//
//React.render(
//    <List entries={listData}/>
//    , document.body);
React.render(<Card data={cardData}/>, document.body);
//React.render(<CardList cardsData={cardsData}/>, document.body);