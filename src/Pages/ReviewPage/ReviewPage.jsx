import { Box } from "@mui/material";
import Overview from "./Overview";
import Review from "./Review";
import ReviewSection from "./ReviewSection";

const ReviewPage = () => {
  return (
    <Box
      sx={(theme) => ({
        height: "fit-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        paddingX: theme.spacing(6),
        paddingY: theme.spacing(6),
        backgroundColor: "rgb(245, 245, 247)",
      })}
    >
      <Overview />
      <Box marginTop={6}/>
      <ReviewSection />
    </Box>
  );
};

export default ReviewPage;
