const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const passport = require('./passport.js');
const flash = require('connect-flash');

const { sequelize } = require('./models');

const app = express();
sequelize.sync({ force: false })
    .then(() => {
        console.log('DB connection is successful!!');
    })
    .catch((err) => {
        console.error(err);
    });

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

app.post("/login", passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    successFlash: "welcome",
    failureFlash: true,
}));

app.get("/login", (req, res) => {
    console.log("login fail");
})

app.listen(process.env.PORT || 8080, () => console.log("Server runing ..."));