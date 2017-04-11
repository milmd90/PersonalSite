// import { Component } from 'react';
// import mysql from 'mysql';
// import config from './config.json'
//
// class DBConnection extends Component{
//     constructor(props) {
//         super(props)
//
//         this.connection = mysql.createConnection({
//           host     : config.host,
//           user     : config.user,
//           password : config.password,
//           database : 'mattdeanmiller'
//         });
//     }
//
//     getConnection() {
//         return this.connection;
//     }
//
//     connect() {
//         this.connection.connect(function(err) {
//             if (err) {
//                 console.error('error connecting: ' + err.stack);
//                 return false;
//             }
//
//             console.log('connected as id ' + this.connection.threadId);
//         });
//         return true;
//     }
//
//     disconnect() {
//         this.connection.end(function(err) {
//             if (err) {
//                 console.error('error disconnecting: ' + err.stack);
//                 return false;
//             }
//
//             console.log('connected as id ' + this.connection.threadId);
//         });
//         return true;
//     }
//
//     getPosts(postName) {
//         this.connect();
//
//         var results = this.connection.query('select * from comments where post ="'+postName+'"', function (error, results, fields) {
//           if (error) throw error;
//         });
//
//         this.disconnect();
//
//         console.log(results);
//         return [];
//     }
//
//     addPost(postName) {
//         return false;
//     }
// }
//
// export default DBConnection;
