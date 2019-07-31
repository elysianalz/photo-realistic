import React from "react";

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

// views
import Home from './views/home';
import Login from './views/login';
import Profile from './views/profile';

function App() {
  return (
    <Router>
     
      <div className={classes.root}>

        <AppBar position="static">
          
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>Photo Realistic</Typography>
            
            <div className={classes.toolbarButtons}>
              <Button size="large" component={Link} to="/" color="inherit">Home</Button>
              <Button size="large" component={Link} to="/profile" color="inherit">Profile</Button>
              <Button size="large" component={Link} to="/login" color="inherit">Login</Button>
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

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  }
}));

export default App;