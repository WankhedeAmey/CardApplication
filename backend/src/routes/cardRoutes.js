const express = require("express");
const  router  = express.Router();
const cardController = require("../controllers/cardController")

router.get("/cards", cardController.getCards);

router.post("/cards", cardController.addCard);

module.exports = router;
