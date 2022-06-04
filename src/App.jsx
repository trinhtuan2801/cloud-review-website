import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ReviewPage from "./Pages/ReviewPage/ReviewPage";
import SearchResultPage from "./Pages/SearchResultPage";

const App = () => {
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
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </Box>
  );
};

export default App;
