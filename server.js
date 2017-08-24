let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
const { Pool, Client } = require('pg')

const PORT = 3000;

let pool = new Pool({
  port:5433,
  password: 'root',
  database: 'countries',
  max: 10,
  host: 'localhost',
  user: 'postgres'
})

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/countries', function(req, res) {
  pool.connect(function(err,db,done){
    if(err){
      console.error(err);
      res.status(500).send({ 'error' : err});
    } else{
      db.query('SELECT * FROM countries', function(err, table){
        done();
        if(err){
          return res.status(400).send({error:err})
        } else {
          return res.status(200).send(table.rows)
        }
      })
    }
  })
})

app.put('/api/countries/:id', function(req,res) {
  pool.connect(function(err,db,done){
    if(err){
      console.error(err);
      res.status(500).send({ 'error' : err});
    } else{
      db.query('INSERT INTO countries (country_name, continent_name, id) VALUES($1, $2, $3) where id = $3', [...values], function(err, table){
        done();
        if(err){
          return res.status(400).send({error:err})
        } else {
          return res.status(200).send(table.rows)
        }
      })
    }
  })
})

app.post('/api/new-country', function(req, res) {
  console.log(req.body);
  var country_name = req.body.country_name;
  var continent_name = req.body.continent_name;
  var id = req.body.id
  let values = [country_name, continent_name, id];

  pool.connect((err, client, done) => {
    if(err) {
      console.log('no connect');
      return res.status(400).send(err);
    } else {
      console.log('connect', values);
      client.query('INSERT INTO countries (country_name, continent_name, id) VALUES($1, $2, $3)', [...values], (err, table) => {
        if(err) {
          console.log(err);
          return res.status(400).send(err);
        } else {
          console.log('INSERTED DATA SUCCESS');
          console.log(table);
          // client.end();
          return res.status(201).send({message: "Data Inserted!", datex:table});
        }
      })
      done();
    }
  })
})

app.listen(PORT, () => console.log("Listening on port" + PORT));
