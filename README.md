## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## api

`https://movie-api-zymiraagoi.now.sh/`

The api consists of two endpoints:

* `/`: fetches a list of movies.
* `/{id}`: fetches information about a specific movie by id.

## Task suggestions

* Make the list of movies prettier. Add some css, show the image
* Make each movie clickable. Show more details about the movie when clicked.
* Add a search-input.
* Add filters.
* Mark movies as favourites. Preserve favourites on page refresh (for instance by adding query parameters and initialise the state from them)
