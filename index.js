require('dotenv').config()

const express = require('express')
// import express from "express"  new way 
const app = express()
const port = 3500

// all this data comes from database and we have created a variable
const githubdata =  {
  "login": "harshittaneja13",
  "id": 76600106,
  "node_id": "MDQ6VXNlcjc2NjAwMTA2",
  "avatar_url": "https://avatars.githubusercontent.com/u/76600106?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harshittaneja13",
  "html_url": "https://github.com/harshittaneja13",
  "followers_url": "https://api.github.com/users/harshittaneja13/followers",
  "following_url": "https://api.github.com/users/harshittaneja13/following{/other_user}",
  "gists_url": "https://api.github.com/users/harshittaneja13/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harshittaneja13/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harshittaneja13/subscriptions",
  "organizations_url": "https://api.github.com/users/harshittaneja13/orgs",
  "repos_url": "https://api.github.com/users/harshittaneja13/repos",
  "events_url": "https://api.github.com/users/harshittaneja13/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harshittaneja13/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harshit",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 5,
  "created_at": "2020-12-25T21:35:17Z",
  "updated_at": "2025-02-03T15:53:03Z"
}

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

// creating a url so that i can pass this data to a user
// This is how the people give api data and then we handle api using react 
app.get('/github' , (req, res)=>{
  res.json(githubdata)
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})