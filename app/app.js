"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // index.js 파일을 읽어옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // bodyParser가 json을 읽을 수 있도록
app.use(bodyParser.urlencoded({extended: true})); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 경우가 있는데 이를 해결해주는 것
app.use("/", home); // use -> 미들 웨어 등록해주는 메서드, / 루트로 접속하면 home 변수로 읽어온 파일을 실행


module.exports = app;