import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CheckIcon from '@material-ui/icons/Check';
import './styles/login.scss';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/hernan-hlace/">
        HH
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/tBlYM_VcIkE)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#24292E',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register({ handleChangeUsername, handleChangePassword, handleChangePassword2, username, password, password2, handleSubmit, checkUsername, formErrors }) {
  const classes = useStyles();

  const checkSubmit = (e) => {
    e.preventDefault()
    if(password != password2) {
      alert('password should be equal')
    }else{
      handleSubmit()
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} onSubmit={checkSubmit}>
            <TextField
              className={formErrors.username.length > 3 ? ('error') : null}
              variant="outlined"
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChangeUsername}
              value={username}
              onBlur={checkUsername}
            />
            {formErrors.username == 'ok' ? (<CheckIcon className='check'/>): (
              <small className='errorMessage'>{formErrors.username}</small>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangePassword}
              value={password}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Repeat Password"
              type="password"
              id="password2"
              autoComplete="current-password"
              onChange={handleChangePassword2}
              value={password2}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an  account? Log in"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
  
}

{/* import React from "react";

export default ({ handleChangeUsername, handleChangePassword, username, password, handleSubmit }) => (
  <div>
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          onChange={handleChangeUsername}
          value={username}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleChangePassword}
          value={password}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  </div>
);
*/}