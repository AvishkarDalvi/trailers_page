import { removeIcon } from "../../../utility/removeIcon";
import classes from "./Filters.module.css";

export default function Filters(props) {
  if (props.filters.length < 1) {
    return null;
  }
  const renderFilter = props.filters.map((item) => (
    <div className={classes["filter-item"]} key={item}>
      {item}
      <img src={removeIcon} alt="not found" />
    </div>
  ));
  return <div className={classes["filter-sec"]}>{renderFilter}</div>;
}
