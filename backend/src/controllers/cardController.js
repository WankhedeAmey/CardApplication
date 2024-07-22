const { Card } = require("../models/card");

const getCards = async (req, res) => {
    let allCards = [];
    try {
        allCards = await Card.find();
        res.json(allCards);
    } catch (err) {
        res.json(err);
    }
};

const addCard = async (req, res) => {
    try {
        console.log("this ran!");
        const newCard = new Card({...req.body});
        console.log("newCard: ", newCard);
        await newCard.save();

        res.json(newCard);
    } catch (err) {
        res.json(err);
    }
};

module.exports = {
    getCards,
    addCard,
};
