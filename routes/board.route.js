// router
const express = require("express");
const router = express.Router(); // {}
const controller = require("../controllers/board.controller");

router.get("/", controller.index);
router.get("/list", controller.list);
router.get("/write", controller.getWrite);
router.post("/write", controller.postWrite);
router.get("/view", controller.view);
router.get("/modify", controller.getModify);
router.post("/modify", controller.postModify);
router.get("/delete", controller.delete);

module.exports = router;
