import Movie from "./Movie/Movie";
import classes from "./Movies.module.css";
import Trailer from "./Trailer/Trailer";
export default function Movies(props) {
  const movies = props.movies;
  const shouldShow = (language) => {
    if (props.filters.length === 0) {
      return true;
    } else {
      return props.filters.includes(language);
    }
  };
  return (
    <ul>
      {Object.keys(movies)
        .filter((movie) => shouldShow(movies[movie].EventLanguage))
        .map((movie) => {
          let showsTrailer = false;
          if (props.currentMovie === movies[movie].EventCode) {
            showsTrailer = true;
          }
          return (
            <li
              className={showsTrailer ? classes["show-trailer"] : null}
              key={movies[movie].EventCode}
            >
              <Movie clickHandler={props.clickHandler} movie={movies[movie]} />
              <Trailer movie={movies[movie]} showsTrailer={showsTrailer} />
            </li>
          );
        })}
    </ul>
  );
}
