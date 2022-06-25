import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";

const SearchBox = ({ searchValue, setSearchValue }) => {
  const hdSearchValueChanges = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Box
      sx={
        (theme) => ({
          height: 'fit-content',
          width: '100%',
        })
      }
    >
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
    </Box>
  );
};

export default SearchBox;
