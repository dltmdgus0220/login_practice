"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    };

    async login() { // await를 사용하기 위해 비동기로 선언
        const client = this.body;
        const { id, password } = await UserStorage.getUserInfo(client.id); // await는 promise를 반환하는 애한테 값을 다 받을 때까지 기다리라는 명령
        
        if (id) {
            if (password === client.password) {
                return { success: true};
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    };

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    };
};


module.exports = User;