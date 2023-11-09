"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // index.js 파일을 읽어옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어 등록해주는 메서드, / 루트로 접속하면 home 변수로 읽어온 파일을 실행

module.exports = app;