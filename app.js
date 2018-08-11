const express = require('express')
const path = require('path')
var socketio = require('socket.io')
let app = express()
app.io = socketio()
app.io.sockets.setMaxListeners(0)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('hjs', require('hogan-express'))
app.set('view engine', 'hjs')
//app.set('layout', 'master')

app.use('/',require('./routes/index'))
// let connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'nodedb',
//     port     :  3307
// })

// connection.connect( (err) => {
//     if (!err){
//         console.log('Connection created Successfully', connection.threadId)
//     }else{
//         console.log("Sorry error occurs", err)
//     }
// })

// var user = { name: 'Adnan', password: '1234' };

// connection.query('INSERT INTO users SET ?', user, (err, res) => {
//   if(err) throw err;
//   console.log('Last insert ID:', res.insertId);
// });


// connection.query('SELECT * FROM users', function(err, rows, fields)  
// { 
//   if (err) throw err; 
//   console.log(rows); 
// }); 

// connection.query(
//     'UPDATE users SET name = ? Where id = ?',
//     ["Adnan Ayoub", 4],
//     function (err, result) {
//       if (err) throw err;
//       console.log('Updated ' + result.changedRows + ' rows');
//     }
//   );

//   connection.query(
//     'DELETE FROM users WHERE id = ?',
//     [2],
//     function (err, result) {
//       if (err) throw err;
//       console.log('Deleted ' + result.affectedRows + ' rows');
//     }
//   );

// connection.end(); 
module.exports = app
