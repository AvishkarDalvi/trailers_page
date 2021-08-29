import classes from "./Trailer.module.css";

export default function Trailer(props) {
  const url = props.movie.TrailerURL.replace(
    "watch?v=",
    "embed/",
    props.movie.TrailerURL
  );
  return (
    <div className={classes["trailer-sec"]}>
      <div className={classes["trailer-frame"]}>
        {props.showsTrailer && (
          <iframe
            title={props.movie.EventTitle}
            width="100%"
            height="100%"
            src={url}
            allow-same-origin="true"
          ></iframe>
        )}
      </div>
      <div></div>
    </div>
  );
}
