import React, { Component } from "react";
import { connect } from "react-redux";

import Movies from "./Movies";
import { setMovies } from "../reducers/movies";
import "./App.css";

const fetchMovies = () => {
  return fetch("https://movie-api-zymiraagoi.now.sh/").then(data =>
    data.json()
  );
};

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    fetchMovies().then(movies => dispatch(setMovies(movies)));
  }
  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(App);
