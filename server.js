const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 8080);
app.use('/static', express.static('static'));
app.get('/', (req, res) => (
  res.render('index')
));

app.listen(app.get('port'), () => {
  console.log(`listening on ${app.get('port')}`);
});
