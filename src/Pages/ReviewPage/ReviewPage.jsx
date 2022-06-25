import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOverview, getReviews } from "../../Services/firestore";
import Overview from "./Overview";
import ReviewSection from "./ReviewSection";

const ReviewPage = () => {
  const { id } = useParams()
  const [overview, setOverview] = useState(null)
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    const getData = async () => {
      let data = await getOverview(id)
      console.log('overview', data)
      setOverview({
        name: data.name,
        creator: data.creator,
        rating: data.rating.average,
        numOfRate: data.rating.total,
        vote_percent: data.rating.stars,
        image: data.image,
      })
      data = await getReviews(id)
      console.log('review', data)
      setReviews(data)
    }
    getData()
  }, [id])

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
      <Overview {...overview} />
      <Box marginTop={6} />
      <ReviewSection reviews={reviews} />
    </Box>
  );
};

export default ReviewPage;
