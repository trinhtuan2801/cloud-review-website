import { Box } from "@mui/material";
import ResultBox from "./ResultBox";

const ResultCard = ({ data }) => {
  return (
    <Box width='100%'>
      {data?.map((e, i) => (
        <ResultBox
          id={e.id}
          key={`resultbox-${i}`}
          title={e.name}
          creator={e.creator}
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
