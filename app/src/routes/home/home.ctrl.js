"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
    register: (req,res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    // register: (req, res) => {

    // },
};

module.exports = {
    output,
    process,
};
// 위 형식은 오브젝트 단위로 exports하는 것이고 key만 입력한 형태이다.
// 이 때 key만 입력한 경우 key와 같은 데이터를 value로 자동으로 입력해준다.
// 다시말해 {output: output} 이런식으로 exports한 상태이다.
