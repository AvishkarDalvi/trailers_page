import classes from "./Movie.module.css";

export default function Movie(props) {
  return (
    <div className={classes["thumbnail-sec"]}>
      <div
        className={classes["movie-div"]}
        style={{ backgroundImage: `url(${props.movie.EventImageUrl})` }}
      ></div>
    </div>
  );
}
