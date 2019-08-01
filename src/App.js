import React from "react";

// firebase auth
import firebase from './firebaseConfig';

// react router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// cloudinary components
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

// material ui components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { flexbox } from '@material-ui/system';

// views
import Home from './views/home';
import Login from './views/login';
import Profile from './views/profile';

// react-router app container
class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			user: {},
		}
	}

	componentDidMount() {

		firebase.auth().onAuthStateChanged((user) => {
	  		if (user) {
	    		// User is signed in.
	    		this.setState({user: user});
	    		console.log(user)
	  		} else {
	   			// No user is signed in.
	   			console.log("no user");
	   			this.setState({user: null})
	  		}
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

		    <Router className={classes.routerContainer}>
		     
		      <div className={classes.root}>

		        <AppBar position="static">
		          
		          <Toolbar className={classes.fullWidth} display="flex">
		            
		            <div><Typography variant="h6" className={classes.title}>Photo Realistic</Typography></div>
		         
		            <div className={classes.toolbarButtons}>

		            	{this.state.user ? 

		            		<div>
		            			<Button size="large" component={Link} to="/" color="inherit">Home</Button>
		              			<Button size="large" component={Link} to="/profile" color="inherit">Profile</Button>
		              			<Button size="large" onClick={() => this.signOut()} color="inherit">Log out</Button>
		              		</div>
		              		
		              		:

		              		<Button size="large" component={Link} to="/login" color="inherit">Login</Button>

		            	}
		            	  	
		            </div>

		          </Toolbar>

		        </AppBar>

		        <Route exact path="/" component={Home} />
		        <Route path="/profile" component={Profile} />
		        <Route path="/login" component={Login} />

		      </div>

		    </Router>

	  	);
  	}
}

const classes = makeStyles(theme => ({

  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },

  toolbarButtons: {
    marginLeft: 'auto',
  },

  fullWidth: {
    width: '100%',
  },

  routerContainer: {
    height: '100vh',
  }

}));

export default App;