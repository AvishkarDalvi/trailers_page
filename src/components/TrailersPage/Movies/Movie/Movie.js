import { useRef } from "react";
import classes from "./Movie.module.css";

export default function Movie(props) {
  //red added to handle scrolling to the clicked movie
  const myRef = useRef(null);

  //function sets the clicked movie as current movie and uses the ref to scroll to the clicked movie
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
