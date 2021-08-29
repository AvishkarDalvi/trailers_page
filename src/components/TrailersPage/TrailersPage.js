import { getTrailerData } from "../../api/getTrailerData/getTrailerData";
import { useEffect, useState } from "react";
import Movies from "./Movies/Movies";
import classes from "./TrailersPage.module.css";

export default function TrailersPage() {
  const [language, setLanguage] = useState("English");
  const [movies, setMovies] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    getTrailerData(setMovies);
  }, []);

  const clickHandler = (eventCode) => {
    console.log("clickHandler", eventCode);
    setCurrentMovie(eventCode);
  };

  return (
    <div className={classes["list-wrapper"]}>
      <header></header>
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
