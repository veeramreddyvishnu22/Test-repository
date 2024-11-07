const express = require ("express")


const app = express ()

const port = 5000

app.get('/apple', (req, res)=>{
        res.send("apple is  red in color")
})

app.get('/about', (req, res)=>{
    res.send("This is about page")
})

app.get('/user/:121', (req,res)=>{
    res.send("you searched for 121")
})

app.listen(port, () =>{
    console.log("Server Start And Running successfully")
})
