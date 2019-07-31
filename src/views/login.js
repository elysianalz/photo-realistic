import React from 'react';
import firebase from '../firebaseConfig';
import "firebase/auth";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


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

	signOut(){
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}).catch(function(error) {
		  // An error happened.
		});
	}

	render(){
		return (
			<React.Fragment>
      			<CssBaseline />
      			<Container maxWidth="sm">
        			<div>
						<h1>Login Page</h1>
						<button onClick={() => this.login()}>login</button>
						<button onClick={() => this.signOut()}>sign out</button>
					</div>
      			</Container>
   			</React.Fragment>
		)
	}
}