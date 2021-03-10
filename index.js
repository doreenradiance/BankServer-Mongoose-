const { request } = require("express");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const bankRouter = require("./routes");
const accountRouter = require("./accountRouter")
const {
    listBanksController,
    createBankController,
    updateBankController,
    deleteBankController
} = require("./controllers")

// create express server instance
const server = express()

//middlewares
server.use(bodyParser.json());

// define routes
server.use(bankRouter)

// define accountRouter
server.use(accountRouter)

// // connect database and start server
mongoose.connect("mongodb+srv://codetrainUser:doreen1@cluster0.dlih7.mongodb.net/codetrain?retryWrites=true&w=majority",
{useNewUrlParser: true, userUnified:  true, useUnifiedTopology: true}
)
.then(result =>{
    server.listen(4004, () => console.log("server is ready"));
}).catch(err => console.log(err));