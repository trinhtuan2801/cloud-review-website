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

const vote_percent = [53, 43, 4, 0, 0];

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

const ResultBox = ({ title, rating, numOfRate, description, image }) => {
  return (
    <Paper
      sx={(theme) => ({
        height: "fit-content",
        boxSizing: "border-box",
        padding: theme.spacing(4),
        borderTop: "3px solid rgb(33, 177, 255)",
        margin: "50px 100px 50px 100px",
        height: "275px",
      })}
    >
      <Grid container>
        <Grid item xs={2}>
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
        </Grid>

        <Grid item xs={5}>
          <Box>
            <Typography variant="h5" style={{ fontWeight: 500 }}>
              {title}
            </Typography>
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
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          {vote_percent.map((percent, index) => (
            <Box display="flex" key={index} alignItems="center" marginTop={1}>
              <Typography color="black" component="div" variant="body2">
                {5 - index} Star
              </Typography>
              <Box marginLeft={1} />
              <BorderLinearProgress value={percent} variant="determinate" />
              <Box marginLeft={1} />
              <Typography color="black" component="div" variant="body2">
                {percent}%
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

      <Box marginTop={4} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined">SEE MORE</Button>
      </Box>
    </Paper>
  );
};

export default ResultBox;
