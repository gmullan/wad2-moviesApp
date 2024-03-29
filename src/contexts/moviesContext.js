import React, { useEffect, createContext, useReducer } from "react";
//import { getMovies } from "../api/tmdb-api";
//import { getMoviesUpcoming } from "../api/tmdb-api"
import { getMovies, getUpcomingMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),

   /*      nowplaying: state.nowplaying.map((n) =>
        n.id === action.payload.movie.id ? { ...n, favorite: true } : n
      ), */
    
      upcoming: [...state.upcoming],       

      };

    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming] };

    case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies] };

    case "add-review":
        return {
            movies: state.movies.map((m) =>
              m.id === action.payload.movie.id
                ? { ...m, review: action.payload.review }
                : m
            ),
            upcoming: [...state.upcoming],
          };
      break;
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    /// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 /*   useEffect(() => {
    getMoviesUpcoming().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

/* import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
    //case "load":
     // return { movies: action.payload.movies };
     case "load": 
     //return { movies: action.payload.movies, upcoming: [...state.upcoming], nowplaying: [...state.nowplaying], toprated: [...state.toprated],popularmovies: [...state.popularmovies] };
     return { movies: action.payload.movies, upcoming: [...state.upcoming]};
   case "load-upcoming": 
     //return { upcoming: action.payload.movies, movies: [...state.movies],  nowplaying: [...state.nowplaying], toprated: [...state.toprated], popularmovies: [...state.popularmovies] };
     return { upcoming: action.payload.movies, movies: [...state.movies]};
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
      };
      break;
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favorites: state.favorites,
        upcoming: state.upcoming,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider; */






/* import React, { useEffect, createContext, useReducer } from "react";
import { getMovies } from "../api/tmdb-api";
import { getMoviesUpcoming } from "../api/tmdb-api"

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
      };
    case "load":
      return { movies: action.payload.movies };
    case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies] };
    case "add-review":
        return {
            movies: state.movies.map((m) =>
              m.id === action.payload.movie.id
                ? { ...m, review: action.payload.review }
                : m
            ),
            // upcoming: [...state.upcoming],
          };
      break;
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    /// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   useEffect(() => {
    getMoviesUpcoming().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider; */