const express = require("express")
const consolidate = require("consolidate")
const bodyParser = require("body-parser");
const sessions = require("express-session")
const sdk = require('api')('@opensea/v1.0#bn18zl0jw8kcu');
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) 
app.use(sessions({
    secret: "giverdiver",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 3600000
    }
}))
app.engine("html", consolidate.hogan)
app.set("views", "content")

app.get('/', async (req, res) => {
    if (req.session.user){
        if (req.session.user.nft){
            if(req.session.user.nft.id == "user"){
                res.render("user.html");
            } else {
                res.render("creator.html");
            }
        } else {
            res.render("nft-input.html");
        }
    } else {
        res.render("index.html");
    }
})

app.post('/', async (req, res) => {
    if (req.body.account){
        req.session.user = {
            account: req.body.account
        }
        res.send("succ");
        /*
        sdk['retrieving-collections']()
        .then(res => console.log(res))
        .catch(err => console.error(err));
        res.send("succ");
        */
    }

})

app.post('/0x4565', async (req, res) => {
    if (req.body["0x4565"] && req.session.user){
        req.session.user.nft = {
            id: req.body["0x4565"]
        }
        res.send("succ_0x4565")
    }
})

app.use(express.static("content"))

app.listen(8080)