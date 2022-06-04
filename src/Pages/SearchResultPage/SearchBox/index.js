import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ searchValue, setSearchValue }) => {
  const hdSearchValueChanges = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <OutlinedInput
      size="small"
      fullWidth
      value={searchValue}
      onChange={hdSearchValueChanges}
      placeholder={`Search these reviews...`}
      startAdornment={
        <InputAdornment position="start">
          <IconButton size="small">
            {" "}
            <SearchIcon fontSize="inherit" />{" "}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchBox;
