import React from 'react';

// firebase authentication
import firebase from '../firebaseConfig';


// material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// login screen
export default class Login extends React.Component {

	constructor(props){
		super(props);
	}

	login(){

		let provider = new firebase.auth.FacebookAuthProvider();
		
		firebase.auth().signInWithPopup(provider).then(function(result) {

		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;

		  // The signed-in user info.
		  var user = result.user;
		  
		})

		.catch(function(error) {

		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;

		  // The email of the user's account used.
		  var email = error.email;

		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;

		});

	}

	render(){
		return (
			<React.Fragment>
      			<CssBaseline />
      			<Container className={classes.container} maxWidth="sm">
        			<div>
						<h1>Login Page</h1>
						<button onClick={() => this.login()}>login</button>
					</div>
      			</Container>
   			</React.Fragment>
		)
	}
}

const classes = makeStyles(theme => ({

  container: {
  	height: '100vh',
  }

}));