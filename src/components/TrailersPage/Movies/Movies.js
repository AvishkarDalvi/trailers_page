import Movie from "./Movie/Movie";
import classes from "./Movies.module.css";
export default function Movies(props) {
  const movies = props.movies;
  return (
    <ul>
      {Object.keys(movies).map((movie) => (
        <li key={movies[movie].EventCode}>
          <Movie EventTitle={movies[movie].EventTitle} />
        </li>
      ))}
    </ul>
  );
}
