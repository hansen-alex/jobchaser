import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFilter } from "../slices/filterSlice";

export const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters.filters);

  return (
    <div>
      <button type="button" onClick={() => dispatch(toggleFilter("entry"))}>
        Entry
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("junior"))}>
        Junior
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("senior"))}>
        Senior
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("frontend"))}>
        Frontend
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("backend"))}>
        Backend
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("fullstack"))}>
        Fullstack
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("contract"))}>
        Contract
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("part-time"))}>
        Part Time
      </button>
      <button type="button" onClick={() => dispatch(toggleFilter("full-time"))}>
        Full Time
      </button>
    </div>
  );
};
