import { getTrailerData } from "../../api/getTrailerData/getTrailerData";
import { useEffect, useState } from "react";
import Movies from "./Movies/Movies";
import classes from "./TrailersPage.module.css";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";
import Error from "./Error/Error";

export default function TrailersPage() {
  //states have been lifted so the changes are reflected across the project
  const [languages, setLanguages] = useState([]);
  const [filters, setFilters] = useState([]);
  const [movies, setMovies] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTrailerData(setMovies, setLanguages, setError, error);
  }, []);

  //function sets the clicked movie as current movie
  const clickHandler = (eventCode) => {
    setCurrentMovie(eventCode);
  };

  //function adds the selected language to the filter array
  const addFilter = (filter) => {
    const currentFilters = [...filters];
    currentFilters.push(filter);
    setFilters(currentFilters);
  };

  //function removes the selected language from the filter array
  const removeFilter = (filter) => {
    let currentFilters = [...filters];
    currentFilters = currentFilters.filter((item) => item !== filter);
    setFilters(currentFilters);
  };

  return (
    <div className={classes["list-wrapper"]}>
      <Header addFilter={addFilter} languages={languages} />
      <Filters removeFilter={removeFilter} filters={filters} />
      <section className={classes["movies-grid"]}>
        {movies && (
          <Movies
            movies={movies}
            filters={filters}
            currentMovie={currentMovie}
            clickHandler={clickHandler}
          />
        )}
      </section>
      {error && <Error />}
    </div>
  );
}
