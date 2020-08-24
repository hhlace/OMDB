import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavContainer from "../containers/NavContainer";
import MoviesContainer from "../containers/MoviesContainer";
import Welcome from "../components/Welcome";
import { connect } from 'react-redux';
import MovieContainer from "../containers/MovieContainer";
import RegisterContainer from "../containers/RegisterContainer";
import Logued from "../containers/LoguedContainer";
import LoginContainer from "../containers/LoginContainer";
import Footer from './Footer';


class main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main">
        <Route path="/" component={NavContainer} />
        <div className="col-xs-10">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/movies" component={MoviesContainer} />
            <Route exact path="/movies/:id" component={MovieContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/logueado" component={Logued} />
          </Switch>
        </div>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}
export default connect(null, null)(main);
