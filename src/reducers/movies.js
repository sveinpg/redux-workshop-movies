const initialState = {
  movies: []
};

export const setMovies = movies => ({
  type: "FETCH_MOVIES_SUCCESS",
  movies
});

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return Object.assign({}, state, { movies: action.movies });
    default:
      return state;
  }
};

export default moviesReducer;
