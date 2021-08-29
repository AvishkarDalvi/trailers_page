import classes from "./Header.module.css";

export default function Header(props) {
  const languages = [
    <option hidden value="">
      select language
    </option>,
    props.languages.map((item) => <option value={item}>{item}</option>)
  ];
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
        <select>{languages}</select>
        <select>
          <option hidden value="genre">
            select genre
          </option>
        </select>
      </div>
    </div>
  );
}
