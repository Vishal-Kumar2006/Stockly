const router = require('express').Router();
const {SignUp, Login } = require("../Controllers/AuthContoller");

router.post("/signup", SignUp);
router.post("/login", Login);

module.exports = router;