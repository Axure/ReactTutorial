var React = require('react');
var Card = require('../components/Card.jsx');
var CardList = require('../components/CardList.jsx');


var listData = [
    {entry: "Name", content: "Yulu Chen"},
    {entry: "Age", content: "19"},
    {entry: "Gender", content: "Female"},
    {entry: "Email", content: "lulucici77@gmail.com"},
    {entry: "Intro", content: "A girl"}
];

var cardData = {
    textData: listData,
    imgSrc: "image/233.jpg"
};

var cardsData = [
    cardData,
    cardData,
    cardData,
    cardData
];
//
//React.render(
//    <List entries={listData}/>
//    , document.body);
React.render(<CardList cardsData={cardsData}/>, document.body);
//React.render(<CardList cardsData={cardsData}/>, document.body);