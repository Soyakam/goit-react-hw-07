import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import {selectNameFilter } from "../../redux/selectors"
import { useId } from "react";

const SearchBox = () => {
const id = useId(); 
  const filter = useSelector(selectNameFilter)
  const dispatch = useDispatch()
  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value))
  };

  return (
    <div className={css.searchBoxContainer}>
      <h3>You can Find contacts by name</h3>
      <input
        type="text"
        id={id}
        value={filter.className}
        onChange={handleChangeInput}
        className={css.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;