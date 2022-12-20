const express = require("express");
const router = express.Router();
const board = require("./board.route");
const notice = require("./notice.route");

router.use("/board", board);
router.use("/notice", notice);

module.exports = router;
