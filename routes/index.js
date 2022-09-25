const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR"
  );

  res.render("index", { cryptoData: data.data.coins });
});

module.exports = router;
