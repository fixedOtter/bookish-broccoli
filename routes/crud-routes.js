//
// made by fixedOtter on 04.09.2023
//

/* imported goods */
// pulling router out of express and defining
const crud_router = require('express').Router();
// gotta know where you live
const path = require('path');
// for filesystem manips
const fs = require('fs');
// for making ez uuids
const {v4 : uuid} = require('uuid');

/* declarations */
// setting the fake database path (will be changed)
const databasePath = path.join(__dirname, '../database/posts.json');

// function for reading the post data and parsing json data
const getPostData = () => {
  return fs.promises.readFile(databasePath)
  .then(data => JSON.parse(data));
}

/* actually the routes */
// this should return all the current posts
crud_router.get('/posts', (req, res) => {
  getPostData()
  .then(postData => {
    res.json(postData);
  })
  .catch(err => {
    console.error(err);
  });
});

// this should make a post
crud_router.post('/post', (req, res) => {
  getPostData()
  .then(postData => {
    // get input from the request
    const userInput = req.body;
    console.log(userInput);

    // make uuid
    newPostID = uuid().slice(0,4);
    // set user post with gen uuid
    userInput.fuuid = newPostID;

    // push user data to variable storing JSON data
    postData.push(userInput);

    // write the new input to the actual JSON database
    fs.promises.writeFile(databasePath, JSON.stringify(postData, null, 2))
      .then(() => {
        // i'm then repling with json data, but this isn't actually what I want
        // redirect them to main posts? redirect them to the new post?
        res.json(userInput)
      });
  });
});

module.exports = crud_router;