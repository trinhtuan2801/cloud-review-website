import { Box } from "@mui/system";
import { useState } from "react";
import ResultCard from "./ResultCard";
import SearchBox from "./SearchBox";

const SearchResultPage = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      sx={(theme) => ({
        height: "fit-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(245, 245, 247)",
      })}
    >
      <Box
        sx={(theme) => ({
          height: "fit-content",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          paddingX: theme.spacing(6),
          paddingY: theme.spacing(4),
          backgroundColor: "rgb(245, 245, 247)",
        })}
      >
        <Box marginTop={2} />
        <SearchBox
          value={searchValue}
          setSearchValue={setSearchValue}
        ></SearchBox>
        <Box marginTop={4} />
        <ResultCard></ResultCard>
      </Box>
    </Box>
  );
};

export default SearchResultPage;
