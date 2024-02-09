const express = require('express');
const path = require("path")

const bodyParser = require( 'body-parser');
const { MongoClient } = require ( 'mongodb');
const { User } = require('./models/userModel');
const app = express ();
require("dotenv").config();
const port = 3000;

const uri = "mongodb+srv://youssef:youssef@test-pro-db.pdeeivd.mongodb.net/youssefdatabase?retryWrites=true&w=majority";
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
  });

app.post('/addData', async (req, res) =>{
const user=new User({email:req.body.email,password:req.body.password})
const saver = await user.save();
res.send(saver);
}) ;


app.post("/",(req,res)=> {
    const myData = req.body.myData ;
    
    
    
    var data = {
                "myData":myData,

            };
        })
        app.listen (process.env.PORT || 3000, () =>{
        console. log (`Server is running on http://localhost:${port}`);
        });
