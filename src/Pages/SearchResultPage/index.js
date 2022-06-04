import { Box } from "@mui/system";
import { useState } from "react";
import ResultCard from "./ResultCard";
import SearchBox from "./SearchBox";

const SearchResultPage = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box sx={{ margin: "20px", backgroundColor: "white", height: "100%" }}>
      <SearchBox
        value={searchValue}
        setSearchValue={setSearchValue}
      ></SearchBox>
      <ResultCard></ResultCard>
    </Box>
  );
};

export default SearchResultPage;
