import classes from "./Trailer.module.css";
import moviesClasses from "../Movies.module.css";

export default function Trailer(props) {
  const movie = props.movie;
  const url = movie.TrailerURL.replace("watch?v=", "embed/", movie.TrailerURL);
  return (
    <div className={moviesClasses["trailer-sec"]}>
      <div className={classes["trailer-frame"]}>
        {props.showsTrailer && (
          <iframe
            title={movie.EventTitle}
            width="100%"
            height="100%"
            src={url}
            allow-same-origin="true"
          ></iframe>
        )}
      </div>
      <div className={classes["trailer-info"]}>
        <div className={classes["trailer-inner"]}>
          <div>{movie.EventTitle}</div>
          <div>{movie.EventLanguage}</div>
          <div>{movie.EventGenre}</div>
          <div>{movie.ShowDate}</div>
        </div>
      </div>
    </div>
  );
}
