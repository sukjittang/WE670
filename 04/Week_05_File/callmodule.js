const cm = require('./ownmodules');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.get('/api/date',(req,res)=>{
    res.write("The date and time is currently: " + cm.myDateTime());
    res.write("\nCreated by: " + cm.mySchool());
    res.end();
    //res.send(`The date and time is currently: ${cm.myDateTime()} \n Created by:  ${cm.myName()}`);
});
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});

const myuser = require('./mymodules');

app.get('/api/myinfo/:fname/:age/:email',(req,res)=>{
        const fname = req.params.fname;
        const age = req.params.age;
        const email = req.params.email;
        const newuser = new myuser(fname, age, email);
        res.send(newuser.getUserStats());
});
    