const express = require('express');
const app = express();
const urlRoute = require("./routers/router");



const port = 3000;
app.use(express.urlencoded({extended:false}))

app.use(express.json());
const path = require("path")
app.use("/url", urlRoute)


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


app.use("/url/analytics",urlRoute)


 app.listen(port,()=>{
    console.log(`server running  on port ${port}`)
 })
