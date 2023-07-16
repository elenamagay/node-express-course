const express = require("express");
const router = express.Router();

const { auth, logon, logoff, test } = require("../controllers/authController");

router.route('/logon').post(logon);
router.route('/logoff').delete(logoff);
router.route('/test').get(auth, test);

module.exports = router;