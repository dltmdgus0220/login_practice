"use strict";

const hello = (req, res) => {
    res.render("home/index"); // app 세팅으로 디렉토리와 엔진을 설정했으므로 ./views/home/index.ejs 이런식으로 안해도됨
};

const login = (req,res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};
// 위 형식은 오브젝트 단위로 exports하는 것이고 key만 입력한 형태이다.
// 이 때 key만 입력한 경우 key와 같은 데이터를 value로 자동으로 입력해준다.
// 다시말해 {hello: hello} 이런식으로 exports한 상태이다.
