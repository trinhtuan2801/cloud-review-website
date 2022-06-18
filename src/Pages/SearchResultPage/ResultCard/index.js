import { Box } from "@mui/material";
import ResultBox from "./ResultBox";

const ResultCard = ({ data }) => {
  return (
    <Box>
      {data?.map((e, i) => (
        <ResultBox
          key={`resultbox-${i}`}
          title={e.name}
          description={e.creater}
          rating={e.rating.average}
          numOfRate={e.rating.total}
          vote_percent={e.rating.stars}
          image={e.image}
        ></ResultBox>
      ))}
    </Box>
  );
};

export default ResultCard;
