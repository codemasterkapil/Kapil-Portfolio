
const express = require('express')
const path = require('path')
const app = express()
  
const PORT = process.env.PORT || 2020;
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
  

  
app.get('/', function(req, res){
    res.status(200).send();
    // res.render('Demo')
})
  
app.listen(PORT, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})