import { removeIcon } from "../../../utility/removeIcon";
import classes from "./Filters.module.css";

export default function Filters(props) {
  //if no filter selected or the filters array is empty then return null
  if (props.filters.length < 1) {
    return null;
  }

  //function removes the language from the filter array
  const removeFilter = (item) => {
    console.log(item);
    props.removeFilter(item);
  };
  const renderFilter = props.filters.map((item) => (
    <div className={classes["filter-item"]} key={item}>
      {item}
      <img
        onClick={removeFilter.bind(null, item)}
        src={removeIcon}
        alt="not found"
      />
    </div>
  ));
  return <div className={classes["filter-sec"]}>{renderFilter}</div>;
}
