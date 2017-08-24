const { Pool } = require('pg');

const pool = new Pool({
  port:5433,
  password: 'root',
  database: 'countries',
  max: 10,
  host: 'localhost',
  user: 'postgres'
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}
