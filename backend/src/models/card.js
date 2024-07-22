const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    aboutme: { type: String, required: true },
    interests: { type: [String], required: true },
    socials: { type: [String], required: true },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = {
    Card,
};
