const express = require("express");
const bodyparser= require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/" , (req,res)=>{
    const date = new Date();
    const numberOfWeekday = date.getDay();

    var day="";

    var nameOfDay = date.toLocaleDateString("en-US", { weekday: 'long' })

    if(numberOfWeekday == 6 || numberOfWeekday==0)
    {
        // res.send("<h1>It's weekend!</h1>");
        day= "Weekend";
    }
    else{
        // res.send("<h1>It's working day</h1>");
        day= "Weekday";
    }

    res.render("Day", {kindOfDay:day, DayName:nameOfDay});
})

app.listen(3000 , ()=>{
    console.log("Server started on 3000");
})