import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFilter } from "../slices/filterSlice";

export const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters.filters);

  return (
    <div className="flex gap-4 p-4">
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.levels.includes("entry") ? "bg-gray-500" : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "levels",
                value: "entry",
              })
            )
          )
        }
      >
        Entry
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.levels.includes("junior") ? "bg-gray-500" : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "levels",
                value: "junior",
              })
            )
          )
        }
      >
        Junior
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.levels.includes("senior") ? "bg-gray-500" : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "levels",
                value: "senior",
              })
            )
          )
        }
      >
        Senior
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.roles.includes("frontend") ? "bg-gray-500" : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "roles",
                value: "frontend",
              })
            )
          )
        }
      >
        Frontend
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.roles.includes("backend") ? "bg-gray-500" : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "roles",
                value: "backend",
              })
            )
          )
        }
      >
        Backend
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.roles.includes("fullstack") ? "bg-gray-500" : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "roles",
                value: "fullstack",
              })
            )
          )
        }
      >
        Fullstack
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.contracts.includes("contract") ? "bg-gray-500" : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "contracts",
                value: "contract",
              })
            )
          )
        }
      >
        Contract
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.contracts.includes("part time")
            ? "bg-gray-500"
            : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "contracts",
                value: "part time",
              })
            )
          )
        }
      >
        Part Time
      </button>
      <button
        className={`p-4 rounded-[12px] text-white cursor-pointer ${
          filters.contracts.includes("full time")
            ? "bg-gray-500"
            : "bg-gray-700"
        }`}
        type="button"
        onClick={() =>
          dispatch(
            toggleFilter(
              JSON.stringify({
                category: "contracts",
                value: "full time",
              })
            )
          )
        }
      >
        Full Time
      </button>
    </div>
  );
};
