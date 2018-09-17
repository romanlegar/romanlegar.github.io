const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
let db;
let users = {
  name: 'tolia'
};
//
app.get('/users', function (req, res){
  console.log('s   t        a           r     t');
  db.collection('users').find().toArray(function(err, docs){
    console.log(docs, 'docs');
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send.docs;
  })
});
app.post('/postusers', function (req, res){
  db.collection('users').insertOne(users, function(err, result){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(users);
  })
});
//
let check = true;
let data = [];
let user = {
              avatar: 'https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon/1000/camera.png',
              login: 'Rominok',
              header: 'https://cdn.pixabay.com/photo/2017/03/19/00/39/camera-2155318_960_720.png'
            }
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res){
  if(check===true){
    res.render('index', {login: user.login});
  }else {
    res.render('form');
  }
});
app.get('/data/:id', function(req, res){
  switch (req.params.id) {
    case 'user':
      res.json({ avatar: user.avatar,  login: user.login, header: user.header });
      break;
    case 'data':
      db.collection('users').find().toArray(function(err, docs){
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
      console.log(docs, 'docs');
      res.json(docs);
      })
      break;
  }
});

app.post('/data/:id', urlencodedParser, function(req, res){
  switch (req.params.id) {
    case 'data':
      // data.push(req.body);
      let users = {
        name: 'tolia'
      };

      db.collection('users').insertOne(users), function(err, result){

        if(err){
          console.log(err);
          return res.sendStatus(500);
        }
        return res.send(users);

      }
      break;
    case 'like':
      let {id, attribute} = req.body;
      data.map(element=>{
        if(element.id == id){
          element.like = attribute;
        }
      });
      break;

    case 'comments':

    let comments = JSON.parse(req.body.attribute);
      data.map(element=>{
        if(element.id == req.body.id){
          element.comments = comments;
        }
      });
      break;

    case 'delete':
      let key = 0;
      data.map((element )=>{
        if(element.id == req.body.id){
          data.splice(key, 1);
          console.log(data);
        }
        key++;
      })
      break;

    case 'login':
      user.login = req.body.login;
      break;

    case 'header':
      user.header = req.body.type;
      console.log(user);
      break;

    case 'avatar':
      user.avatar = req.body.type;
      console.log(user, 2);
      break;
  }
});


MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);
  client.close();
  app.listen(3000, function () {
    console.log('API app start')
  })
});
