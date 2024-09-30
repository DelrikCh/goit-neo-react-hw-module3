import { useId } from "react";

import classes from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  const id = useId();
  return (
    <div className={classes["search-box"]}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default SearchBox;
