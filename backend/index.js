const express = require("express");
const cardRoutes = require("./src/routes/cardRoutes")
const { connectDB } = require("./src/config/db");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//add routes
app.use("/api/", cardRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
