import style from "./Searchbar.module.css";

interface Props {
  searchTerm: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Searchbar = ({ searchTerm: searchterm, onChange }: Props) => {
  return (
    <input
      className={style.searchbar}
      value={searchterm}
      onChange={onChange}
      type="text"
      placeholder="Junior..."
    ></input>
  );
};
