"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router; // 외부(다른파일)에서 사용할 수 있도록