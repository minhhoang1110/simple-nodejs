const router = require("express").Router();
const Client = require("../controllers/Client");
router.post("", Client.Create);
router.get("/:id", Client.Get);
router.get("", Client.GetList);
router.patch("/:id", Client.Update);
module.exports = router;
