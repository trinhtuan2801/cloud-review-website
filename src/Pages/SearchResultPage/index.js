import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import SearchBox from "./SearchBox";
import { getOverviews } from "../../Services/firestore";

const SearchResultPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null);

  useEffect(async () => {
    let data = await getOverviews();
    setData(data);
    console.log(data);
  }, []);

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
          setData={setData}
        ></SearchBox>
        <Box marginTop={4} />
        <ResultCard data={data}></ResultCard>
      </Box>
    </Box>
  );
};

export default SearchResultPage;
