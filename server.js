'use strict';

var express = require('express');
var cors = require('cors');
var upload = require('multer')().single('upfile')
// require and use "multer"...
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload, function(req, res){
  if(req.file){
    res.json({name:req.file.originalname, size:req.file.size, type:req.file.mimetype})
  }
  else{
    res.json({error:'No file found'});
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
