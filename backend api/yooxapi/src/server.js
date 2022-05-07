// const app = require("./index.js")
// const connect = require("./configs/db")
// app.listen (6273, async function(){
//     await connect ();
//     console.log("Listening on port 6273");
// })

const app = require("./index.js")
const connect = require("./configs/db");

require("dotenv").config();
const PORT=process.env.PORT || 6285
app.listen (PORT, async function(){
    await connect ();
    console.log("Listening on port 6285");
})