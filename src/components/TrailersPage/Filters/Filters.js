import classes from "./Filters.module.css";

export default function Filters(props) {
  if (props.filters.length < 1) {
    return null;
  }
  return <div className={classes["filter-sec"]}></div>;
}
