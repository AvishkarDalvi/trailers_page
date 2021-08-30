import { useRef } from "react";
import classes from "./Movie.module.css";

export default function Movie(props) {
  const myRef = useRef(null);
  const movieClickHandler = () => {
    props.clickHandler(props.movie.EventCode);
    myRef.current.scrollIntoView();
  };
  return (
    <div className={classes["thumbnail-sec"]}>
      <div
        ref={myRef}
        onClick={movieClickHandler}
        className={classes["movie-div"]}
        style={{ backgroundImage: `url(${props.movie.EventImageUrl})` }}
      ></div>
    </div>
  );
}
