import React from 'react';

// material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// firebase auth
import firebase from '../firebaseConfig';

// home screen
export default class Home extends React.Component {
	render(){
		return (
			<React.Fragment>
      			<CssBaseline />
      			<Container maxWidth="sm">
        			<div>
						<h1>Home</h1>
					</div>
      			</Container>
   			</React.Fragment>
		)
	}
}