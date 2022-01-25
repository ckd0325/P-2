const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const passport = require('./passport.js');
const flash = require('connect-flash');

const { User, sequelize } = require('./database/models');

const app = express();

sequelize
    .sync()
    .then(() => console.log('connected database'))
    .catch(err => console.error('occurred error in database connecting', err))

app.use(express.static(__dirname + "/front_end/view"));
app.use(express.static(__dirname + "/front_end"));
app.use(express.json());

app.use(passport.initialize())
app.use(flash())
app.use(expressSession({
    secret: 'my Key',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.session())

app.get("/", (req, res) => { //첫 연결: 클라이언트에 html 전송
    console.log("success");
    res.sendFile(path.resolve("front_end", "view", "page.html"));
});

app.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    successFlash: "welcome",
    failureFlash: true,
}));

app.get("/login", (req, res) => {
    console.log("login fail");
})

app.post("/sign-up", (req, res) => {
    const { id } = req.body;
    const { password } = req.body;
    console.log(`${id}   ${password}`);
    console.log(req.body);

    User.create({
        user_id: `${id}`,
        user_pw: `${password}`
    })
})

app.listen(process.env.PORT || 8080, () => console.log("Server runing ..."));