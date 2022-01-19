const express = require('express');
const path = require('path');

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

app.get("/", (req, res) => { //첫 연결: 클라이언트에 html 전송
    console.log("success");
    res.sendFile(path.resolve("front_end", "view", "page.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("Server runing ..."));