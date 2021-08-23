//import React, { useContext } from "react";
//import PageTemplate from '../components/templateMovieListPage'
//import {MoviesContext} from '../contexts/moviesContext'
//import { getUpcomingMovies } from "../api/tmdb-api";
//import AddToFavoritesButton from '../components/buttons/addToFavorites'
//import AddReviewButton from '..components/buttons/AddReviewButton'

import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => { //finds the movies 
      setMovies(movies); //stores the movies
    });
  }, []);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <PageTemplate //used to build page
        title='Upcoming Movies'
        movies={movies} //passing the array list 
        buttonHandler={addToFavorites}
        action={(movies) => {
          // return <AddToFavoritesButton movie={toprated} /> 
        }}
      />
  );
};

export default MovieListPage;

/* const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  
    return !("favorite" in m);
  });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  ); */
/*   return (
    <PageTemplate 
    title='Upcoming Movies'
    movies={context.upcoming}
    action={movie => <AddReviewButton movie={movie} />} 
    />
    ); */
//};

//export default MovieListPage;


/* import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getMoviesUpcoming } from "../api/tmdb-api";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesUpcoming().then(movies => {
      setMovies(movies);
    });
  }, []);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        buttonHandler={addToFavorites}
      />
  );
};

export default MovieListPage; */

