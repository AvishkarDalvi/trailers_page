import classes from "./Filters.module.css";

export default function Filters(props) {
  if (props.filters.length < 1) {
    return null;
  }
  console.log("classes", classes);
  const renderFilter = props.filters.map((item) => (
    <div key={item}>{item}</div>
  ));
  return <div className={classes["filter-sec"]}>{renderFilter}</div>;
}
