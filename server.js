const express = require('express')
const app = express()

const greetings = ["Hello", "Hi", "Hey", "Hey I am the doctor", "Hei", "May the force be with you", "Look what the cat dragged in!", "Y-ellow", "Oh no, not you again!"];

app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'))


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/greet', function (req, res) {
    
    let randomIndex = Math.floor(Math.random()*greetings.length);

    res.send(greetings[randomIndex] + ", " + req.query.navn);
});

app.listen(app.get("port"), function () {
  console.log('Example app listening on port 8080!')
});




