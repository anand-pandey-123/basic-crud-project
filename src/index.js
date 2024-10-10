const express= require("express");
const{ PORT } = require("./config");
const apiRoutes = require('./routes')
const app= express();


app.use(express.json())
app.use(express.urlencoded({extended: true}));


const port=3000;

app.use('/api', apiRoutes);

app.listen(port, ()=>{
  console.log(`listening to port ${port}`);
})