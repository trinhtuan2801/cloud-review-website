import { Box } from "@mui/material";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ReviewPage from "./Pages/ReviewPage/ReviewPage";
import SearchResultPage from "./Pages/SearchResultPage";
import { getOverviews } from "./Services/firestore";

const App = () => {

  // useEffect(() => {
  //   const getData = async () => {
  //     let data = await getOverviews()
  //     console.log('overviews', data)
  //   }
  //   getData()
  // }, [])

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        padding: 0,
        margin: 0,
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:keyword" element={<SearchResultPage />} />
        <Route path="/review/:id" element={<ReviewPage />} />
      </Routes>
    </Box>
  );
};

export default App;
