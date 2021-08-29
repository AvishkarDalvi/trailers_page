import { getTrailerData } from "../../api/getTrailerData/getTrailerData";
import { useEffect, useState } from "react";
import Movies from "./Movies/Movies";
import classes from "./TrailersPage.module.css";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";

export default function TrailersPage() {
  const [languages, setLanguages] = useState([]);
  const [filters, setFilters] = useState([]);
  const [movies, setMovies] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    getTrailerData(setMovies, setLanguages);
  }, []);

  const clickHandler = (eventCode) => {
    setCurrentMovie(eventCode);
  };

  const addFilter = (filter) => {
    const currentFilters = [...filters];
    currentFilters.push(filter);
    setFilters(currentFilters);
  };

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
    </div>
  );
}
