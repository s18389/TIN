const express = require("express");
const app = express();
const port = 1234;
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

//8a
app.get("/hello", (req, res) => {
    res.send("hello world");
});

//8b
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'someHtmlFile.html'));
});

//8c
app.post('/formdata', function (req, res) {
    res.render('index', {
        title: 'Whooo PUG here',
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hobby: req.body.hobby

    })
})

//8d
app.get('/jsondata', function (req, res) {
    const fs = require('fs');
    let obj = null;
    fs.readFile('views/someData.json', (err, data) => {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(obj);

        res.render('index8d', {
            jsonMessage: "Here is a student founded inside JSON file someData.json:",
            firstName: 'First name: ' + obj.firstName,
            lastName: 'Last name: ' + obj.lastName,
            hobby: 'Hobby is: '+  obj.hobby
        });

    });

});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})