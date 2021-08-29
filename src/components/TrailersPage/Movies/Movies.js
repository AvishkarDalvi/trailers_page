import Movie from "./Movie/Movie";
import classes from "./Movies.module.css";
export default function Movies(props) {
  const movies = props.movies;
  return (
    <ul>
      {Object.keys(movies).map((movie) => {
        let showsTrailer = false;
        if (props.currentMovie === movies[movie].EventCode) {
          showsTrailer = true;
        }
        return (
          <li
            className={showsTrailer ? classes["show-trailer"] : null}
            key={movies[movie].EventCode}
            onClick={() => props.clickHandler(movies[movie].EventCode)}
          >
            <Movie movie={movies[movie]} />
          </li>
        );
      })}
    </ul>
  );
}
