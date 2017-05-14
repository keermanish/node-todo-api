const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Root Route');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad Request'
  });
});

app.listen(3000, () => {
  console.log('App listen on 3000 port');
});
