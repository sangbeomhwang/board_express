// router
const express = require("express");
const router = express.Router(); // {}
const controller = require("../controllers/board.controller");

router.get("/", controller.index);

router.get("/list", controller.list);

router.get("/write", controller.write_get);

router.post("/write", controller.write_post);

router.get("/view", controller.view);

router.get("/modify", controller.modify_get);

router.post("/modify", controller.modify_post);

router.get("/delete", controller.delete);

module.exports = router;
