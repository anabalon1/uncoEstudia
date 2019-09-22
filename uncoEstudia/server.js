const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const Curso = require('./models/Curso');
const withAuth = require('./middleware');
const cors = require ('cors');




const app = express();

const secret = 'mysecretsshhh';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const mongo_uri = 'mongodb://localhost/react-auth';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//--------------HOME/CURSOS--------------
app.get('/api/getCursos', async (req, res) => {
  try {
      const cursos = await Curso.find();
      res.json(cursos);
  }
  catch (err) {
      res.status(400).json({
          error: err
      })
    };

  })
app.post('/api/newCurso', function(req, res) {
  const { titulo, descripcion, valor } = req.body;
  const curso = new Curso({ titulo, descripcion,valor });
  curso.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("error al cargar el nuevo curso");
    } else {
      res.status(200).send("nuevo curso cargado!");
    }
  });
});

app.post('/api/deleteCurso/:id', async function(req, res) {
const { id } = req.params;
await Curso.findByIdAndDelete(id);
res.json('Curso deleted');
})





//--------------REGISTRO--------------
app.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});
//--------------LOGIN--------------
app.post('/api/authenticate', function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
        error: 'Incorrect email or password'
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
            error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
            error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

app.listen(process.env.PORT || 8080);
