"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(id, data) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUser(fields, isAll, data) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => { // newUsers 딕셔너리를 계속 업데이트해주면서 fields에 대해 반복
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {}); // newUsers의 초기값을 {}로 선언
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUser(fields, isAll, data);
        })
        .catch(console.error)       
    };

    static getUserInfo(id) {
        // then 은 성공했을 때, catch는 실패했을 때, 프런트에서 fetch가 바로 promises 타입으로 데이터를 반환하는 것이라고 함
        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(id, data);
            })
            .catch(console.error)
    };

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    };
};

module.exports = UserStorage;