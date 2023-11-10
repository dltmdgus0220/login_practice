"use strict";

class UserStorage {
    static #users = {
        id: ["aaa", "bbb", "ccc"],
        password: ["111", "222", "333"],
        name: ["A", "B", "C"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => { // newUsers 딕셔너리를 계속 업데이트해주면서 fields에 대해 반복
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {}); // newUsers의 초기값을 {}로 선언
        return newUsers;
    };

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    };

    static save(userInfo) {
        const users = this.#users;
        users.name.push(userInfo.name);
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
    };
};

module.exports = UserStorage;