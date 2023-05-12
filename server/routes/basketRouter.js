const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/add", basketController.addDevice);
router.delete("/remove", basketController.removeDevice);
router.get("/:basketId", basketController.getDevices);

module.exports = router;
