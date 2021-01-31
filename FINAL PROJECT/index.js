require('./models/db')
const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess,} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')
const port = 1234
const carController = require('./controllers/carController')
const carOwnerController = require('./controllers/carOwnerController')
const carServiceController = require('./controllers/carServiceController')

const app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res) =>{
    res.send('' +
        '<h3>Click here to show <b><a href="car/list">car list</a> </b></h3>' +
        '<h3>Click here to show <b><a href="carOwner/list">car owner list</a> </b></h3>' +
        '<h3>Click here to show <b><a href="carService/list">car service list</a> </b></h3>')
})

app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: 'MainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}))
app.set("view engine", "hbs")

app.listen(port, () => {
    console.log("Server started at port " + port)
})

app.use("/car", carController)
app.use("/carOwner", carOwnerController)
app.use("/carService", carServiceController)
