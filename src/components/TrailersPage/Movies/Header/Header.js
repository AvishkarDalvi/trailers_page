import classes from "./Header.module.css";

export default function Header(props) {
  const languages = [
    <option key="hidden" hidden value="">
      select language
    </option>,
    props.languages.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))
  ];
  const addFilter = (event) => {
    props.addFilter(event.target.value);
  };
  return (
    <div className={classes["header-sec"]}>
      <div className={classes["inner-flex"]}>
        <div>Movie Trailers</div>
        <div>Coming soon</div>
        <div>Now showing</div>
      </div>
      <div className={classes["inner-flex"]}>
        <select>
          <option hidden value="popular">
            select popular
          </option>
        </select>
        <select onChange={addFilter}>{languages}</select>
        <select>
          <option hidden value="genre">
            select genre
          </option>
        </select>
      </div>
    </div>
  );
}
