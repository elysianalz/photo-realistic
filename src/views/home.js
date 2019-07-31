import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


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