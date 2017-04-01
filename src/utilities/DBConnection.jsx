import { Component } from 'react';
import mysql from 'mysql';
import options from '../../options'

class DBConnection extends Component{
    constructor(props) {
        super(props)
        this.connection = mysql.createConnection({
          host     : 'localhost',
          user     : options.storageConfig.user,
          password : options.storageConfig.password,
          database : 'mattdeanmiller'
        });
    }

    getConnection() {
        return this.connection;
    }
}

export default DBConnection;
