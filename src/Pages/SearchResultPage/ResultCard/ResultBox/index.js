import {
  Box,
  Button,
  Paper,
  Rating,
  Typography,
  LinearProgress,
  linearProgressClasses,
  Grid,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 10,
  width: 200,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: "#1a90ff",
  },
}));

const ResultBox = ({
  title,
  rating,
  numOfRate,
  description,
  image,
  vote_percent,
}) => {
  return (
    <Paper
      sx={(theme) => ({
        height: "fit-content",
        boxSizing: "border-box",
        paddingLeft: theme.spacing(4),
        paddingY: theme.spacing(4),
        paddingRight: theme.spacing(15),
        borderTop: "3px solid rgb(33, 177, 255)",
        // margin: "50px 100px 50px 100px",
        marginTop: theme.spacing(5),
        height: "fit-content",
        maxWidth: "1150px",
        boxSizing: "border-box",
      })}
    >
      <Box display="flex">
        <Box display="flex">
          <img
            style={{
              padding: "10px",
              maxHeight: "100px",
              aspectRatio: "1/1",
              boxShadow: "rgb(221 221 226) 0px 0px 0px 1px inset",
              border: "0.5px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "4px",
              objectFit: "contain",
            }}
            src={image}
            alt="nice image"
          />
          <Box marginLeft={2} />
          <Box>
            <Box>
              <Link to={"/review"}>
                <Typography variant="h5" style={{ fontWeight: 500 }}>
                  {title}
                </Typography>
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="h7">{rating}</Typography>
              <Box marginLeft={1.5} />
              <Rating value={rating} precision={0.1} size="small" readOnly />
              <Box marginLeft={1.5} />
              <Typography variant="body1" color="rgb(33, 177, 255)">
                {`${numOfRate} Ratings`}
              </Typography>
            </Box>
            <Box>
              <Typography>{description}</Typography>
            </Box>
          </Box>
        </Box>
        <Box marginLeft={20} />
        <Box>
          {vote_percent.map((percent, index) => (
            <Box display="flex" key={index} alignItems="center" marginTop={1}>
              <Typography color="black" component="div" variant="body2">
                {5 - index} Star
              </Typography>
              <Box marginLeft={1} />
              <BorderLinearProgress
                value={vote_percent[5 - index - 1]}
                variant="determinate"
              />
              <Box marginLeft={1} />
              <Typography color="black" component="div" variant="body2">
                {vote_percent[5 - index - 1]}%
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* <Box marginTop={4} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined">SEE MORE</Button>
      </Box> */}
    </Paper>
  );
};

export default ResultBox;
