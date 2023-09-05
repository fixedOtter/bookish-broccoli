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
// what are this for?
// const {v4 : uuid} = require('uuid');

/* declarations */
// setting the fake database path (will be changed)
const databasePath = path.join(__dirname, '../database/posts.json');

// function for reading the post data and parsing json data
const getPostData = () => {
  return fs.promises.readFile(databasePath)
  .then(data => JSON.parse(data));
}

/* actually the routes */
//this should return all the current posts
crud_router.get('/posts', (req, res) => {
  getPostData()
  .then(postData => {
    res.json(postData);
  })
  .catch(err => {
    console.error(err);
  });
});

module.exports = crud_router;