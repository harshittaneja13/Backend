require('dotenv').config()

const express = require('express')
// import express from "express"  new way 
const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('Hello Harshit!')
})

app.get('/twitter' , (req, res) => {
    res.send('Harshitdotcom')
})

app.get('/login' , (req, res)=>{
  res.send('<h1> Please Login at the site</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>CodeStoryWithMIK </h2>')
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})