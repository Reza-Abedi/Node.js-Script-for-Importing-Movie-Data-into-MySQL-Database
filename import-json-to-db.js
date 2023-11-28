// Import the file system module (fs)
import fs from 'fs';

// Import the database driver
import mysql from 'mysql2/promise';

// Read the json string from file
let json = fs.readFileSync('movie-data.json');

// Convert from a string to a real data structure
let data = JSON.parse(json);


// Create a connection 'db' to the database
const db = await mysql.createConnection({
  host: '',
  port: " ",
  user: ' ',
  password: ' ',
  database: ' '
});

// A small function for a query
async function query(sql, listOfValues) {
  let result = await db.execute(sql, listOfValues);
  return result[0];
}

for (let movie of data) {
  console.log('A MOVIE:');
  console.log(movie);
  // INSERT TO DATABASE
  let result = await query(`
    INSERT INTO movies (title, description)
    VALUES(?, ?)
  `, [movie.title, movie.description]);
  console.log(result);
}
