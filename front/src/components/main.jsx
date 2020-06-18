import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavContainer from "../containers/NavContainer";
import MoviesContainer from "../containers/MoviesContainer";
import Welcome from "../components/Welcome";
import { connect } from 'react-redux';
import MovieContainer from "../containers/MovieContainer";
import RegisterContainer from "../containers/RegisterContainer";
import Logueado from "./Logueado";
import LoginContainer from "../containers/LoginContainer";


class main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main" className="container-fluid">
        <Route path="/" component={NavContainer} />
        <div className="col-xs-10">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/movies" component={MoviesContainer} />
            <Route exact path="/movies/:id" component={MovieContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/logueado" component={Logueado} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default connect(null, null)(main);
