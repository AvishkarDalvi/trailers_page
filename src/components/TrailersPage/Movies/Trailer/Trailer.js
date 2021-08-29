import classes from "./Trailer.module.css";

export default function Trailer(props) {
  const movie = props.movie;
  const url = movie.TrailerURL.replace("watch?v=", "embed/", movie.TrailerURL);
  return (
    <div className={classes["trailer-sec"]}>
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
      <div>
        <span>{movie.EventTitle}</span>
      </div>
    </div>
  );
}
