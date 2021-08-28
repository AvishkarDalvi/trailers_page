import classes from "./Movie.module.css";

export default function Movie(props) {
  console.log('Movie',props);
  
  return (
    <div className={classes["movie-div"]}>
      <img src={props.movie.EventImageUrl} alt={props.EventTitle} />
    </div>
  );
}
