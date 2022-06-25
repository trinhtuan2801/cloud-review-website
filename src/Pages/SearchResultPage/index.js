import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import SearchBox from "./SearchBox";
import { getOverviews } from "../../Services/firestore";
import { useParams } from "react-router-dom";

const SearchResultPage = () => {
  let { keyword } = useParams()
  const [searchValue, setSearchValue] = useState(keyword);
  const [data, setData] = useState([]);
  const [results, setResults] = useState([])

  const getData = async (name) => {
    let data = await getOverviews(name);
    setData(data);
    console.log(data);
  }

  const filterResult = (keyword) => {
    console.log('search', data, keyword)
    setResults(data.filter(service => service.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  useEffect(() => {
    getData('')
  }, [])

  useEffect(()=>{
    if (!data.length) return
    filterResult(keyword)
  }, [data])

  useEffect(() => {
    filterResult(searchValue)
  }, [searchValue])

  return (
    <Box
      sx={(theme) => ({
        height: "fit-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(245, 245, 247)",
        paddingX: theme.spacing(6),
        boxSizing: 'border-box'
      })}
    >
      <Box
        sx={(theme) => ({
          height: "fit-content",
          width: "100%",
          maxWidth: '1000px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
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
        <ResultCard data={results}></ResultCard>
      </Box>
    </Box>
  );
};

export default SearchResultPage;
