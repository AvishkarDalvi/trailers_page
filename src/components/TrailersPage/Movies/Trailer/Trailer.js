import classes from "./Trailer.module.css";
import moviesClasses from "../Movies.module.css";

export default function Trailer(props) {
  const movie = props.movie;

  //replacing watch with embed inside the youtube video link as the link from the API was not working
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
          <div className={classes["trailer-title"]}>{movie.EventTitle}</div>
          <div className={classes["trailer-common"]}>{movie.EventLanguage}</div>
          <div className={classes["trailer-common"]}>{movie.EventGenre}</div>
          <div className={classes["trailer-common"]}>{movie.ShowDate}</div>
        </div>
      </div>
    </div>
  );
}
