const express = require("express");
const router = express.Router();

const { sendEmail } = require("../services/generateEmail");

router.post("/sendEmail", sendEmail);


module.exports = router;  