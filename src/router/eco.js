const express = require('express');
const router = express.Router();
const mainController = require("../controller/main")

router.post("/ecoforest/newsletter", mainController.newsletter)
router.post("/ecoforest/contact", mainController.contactUs)


module.exports = router;

