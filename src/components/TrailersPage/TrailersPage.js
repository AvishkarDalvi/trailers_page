import { getTrailerData } from "../../api/getTrailerData/getTrailerData";
import { useEffect, useState } from "react";
import Movies from "./Movies/Movies";
import classes from "./TrailersPage.module.css";
import Header from "./Header/Header";

export default function TrailersPage() {
  const [languages, setLanguages] = useState([]);
  const [movies, setMovies] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    getTrailerData(setMovies, setLanguages);
  }, []);

  const clickHandler = (eventCode) => {
    console.log("clickHandler", eventCode);
    setCurrentMovie(eventCode);
  };

  return (
    <div className={classes["list-wrapper"]}>
      <Header languages={languages} />
      <section className={classes["movies-grid"]}>
        {movies && (
          <Movies
            movies={movies}
            currentMovie={currentMovie}
            clickHandler={clickHandler}
          />
        )}
      </section>
    </div>
  );
}
