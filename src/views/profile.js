import React from 'react';

// firebase authentication
import firebase from '../firebaseConfig';

// material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Button, makeStyles } from '@material-ui/core';

// Profile screen
export default class Profile extends React.Component {

	constructor(props){
		super(props);
	}

	handleChange(e){

		let upload = e.target.files[0];
		var storageRef = firebase.storage().ref("images/"+upload.name);

		storageRef.put(upload).then(function(snapshot) {
  			console.log('Uploaded a blob or file!');
		});
		
	}

	render(){
		return (

			<React.Fragment>
      			<CssBaseline />
      			<Container maxWidth="sm">
        			<div>
						<h1>Profile</h1>
					</div>

					<input
        				accept="image/*"
        				className={classes.input}
        				style={{ display: 'none' }}
        				id="contained-button-file"
        				multiple
        				type="file"
        				onChange={(e) => this.handleChange(e)}
      				/>

      				<label htmlFor="contained-button-file">
        				<Button variant="contained" component="span" className={classes.button}>
          					Upload
        				</Button>
      				</label>

      			</Container>
   			</React.Fragment>
		)
	}
}

const classes = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));