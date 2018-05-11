import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from '../../firebase.json';

class Login extends Component {
    componentDidMount() {
        console.log(config);
        firebase.initializeApp(config);
        firebase.database().ref('/').set({
            username: "test",
            email: "test@mail.com"
        });
    }

    render() {
        return (
            <div className="page">
                Hey
            </div>
        );
    }
};

export default Login;
