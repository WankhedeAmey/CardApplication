const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect(
            "mongodb+srv://wankhedeameyb:admin123@cluster0.kbirj.mongodb.net/cardApp"
        )
        .then(() => {
            console.log("connected to mongodb...");
        })
        .catch((err) => {
            console.error(err.message);
        });
};

module.exports = {
    connectDB,
};
