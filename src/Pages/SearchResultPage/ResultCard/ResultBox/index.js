import { Box, Button, Paper, Rating, Typography } from "@mui/material";

const ResultBox = ({ title, rating, numOfRate, description, image }) => {
  return (
    <Paper
      sx={(theme) => ({
        height: "fit-content",
        width: "100%",
        boxSizing: "border-box",
        padding: theme.spacing(4),
        borderTop: "3px solid rgb(33, 177, 255)",
        margin: "20px",
      })}
    >
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
            <Typography variant="h4" style={{ fontWeight: 500 }}>
              {title}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">{rating}</Typography>
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

      <Box marginTop={4} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined">SEE MORE</Button>
      </Box>
    </Paper>
  );
};

export default ResultBox;
