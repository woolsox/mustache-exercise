const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  res.render('todo',
   { "toDoList" : [
     { "list" : 'Learn Node Basics', "complete" : true },
     { "list" : 'Learn Express Basics', "complete" : true },
     { "list" : 'Learn Mustache', "complete" : true },
     { "list" : 'Learn HTML forms with Express' },
     { "list" : 'Learn about authentication' },
     { "list" : 'Learn how to connect to PostgreSQL' },
     { "list" : 'Learn how to create databases' },
     { "list" : 'Learn SQL' },
     { "list" : 'Learn how to connect to PostgreSQL from Node' },
     { "list" : 'Learn how to use Sequelize' }
   ]
  });
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
