const express = require("express");
const { validation } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

// singup

router.post("/register", validation(schemas.registerSchema));
module.exports = router;

// // // registration
// // router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// // login
// router.post("/login", validateBody(schemas.loginSchema), сtrl.login);

// module.exports = router;
