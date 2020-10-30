import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from '../src/components/headerMovie';



const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Batman Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 55000000,
  genres: [
   
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 18,
      name: "Drama"
    }
  ],
  homepage:
    "http://www.jokermovie.net/",
  id: 181808,
  imdb_id: "tt7286456",
  original_language: "en",
  original_title: "Joker",
  overview:
    "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic figure",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "DC Enterainment",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Warner Bros. Pictures",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "DC Comics",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Joint Effort",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Village Roadshow Pictures",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Bron Studios",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Creative Wealth Media Finance",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_2: "CA",
      name: "Canada"
    },
    {
      iso_3166_2: "US",
      name: "United States of America"
    }
  ],
  release_date: "2019-10-02",
  revenue: 1332459537,
  runtime: 122,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

storiesOf("Home Page/MovieCard", module)
  .add("default", () => <MovieCard movie={sample} />)
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return <MovieCard movie={sampleNoPoster} />;
  });

storiesOf("Home Page/FilterControls", module)
.add("default", () => <FilterControls /> );

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .add("default", () => {
    const movies= [sample, sample, sample, sample, sample]
    return <MovieList movies={movies} />
});

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module).add("default", () => (
  <MovieHeader movie={sample} />
));

