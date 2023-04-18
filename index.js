const express = require("express")
const app = express()
const port = 4000 
const apidata = require("./data.json")

app.get('/', (req, res)=>{
    res.send('hello')
})

app.get('/api', (req, res)=>{
    res.send(apidata)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port} `)
})