const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const app = express();

app.set('view engnie', 'hbs');
app.use(bodyParser.json());

app.get('/first', (req, res) => {
  res.render('first.hbs', {
    title: 'Page One',
    rank: 'First'
  });
});

app.get('/second', (req, res) => {
  res.render('second.hbs', {
    title: 'Page Two',
    rank: 'Second'
  });
});

app.post('/post', (req, res) => {
  res.send({
    "params": req.query,
    "body": req.body
  });
})

app.listen(3000, () => console.log('app started on 3000'));
