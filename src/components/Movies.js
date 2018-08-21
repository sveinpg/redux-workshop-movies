import React from "react";
import { connect } from "react-redux";

const Movies = ({ movies }) => (
  <ul>{movies.map(movie => <li>{movie.title}</li>)}</ul>
);

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps, null)(Movies);
