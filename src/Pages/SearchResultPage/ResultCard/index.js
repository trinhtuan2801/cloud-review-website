import { Box } from "@mui/material";
import ResultBox from "./ResultBox";

const ResultCard = () => {
  return (
    <Box>
      <ResultBox
        title={"Google Cloud Platform"}
        description={"by Google"}
        rating={4.5}
        numOfRate={500}
        image={
          "https://www.gartner.com/imagesrv/apps/peerinsights/images/vendors/logos/google_enterprise-mobility-management-suites.png"
        }
      ></ResultBox>
      <ResultBox
        title={"Amazon Web Services"}
        description={
          "by Amazon"
        }
        rating={4.5}
        numOfRate={500}
        image={
          "https://www.gartner.com/imagesrv/apps/peerinsights/images/vendors/logos/amazon-web-services_public-cloud-iaas.png "
        }
      ></ResultBox>
      <ResultBox
        title={"Google Cloud Platform"}
        description={"by Google"}
        rating={4.5}
        numOfRate={500}
        image={
          "https://www.gartner.com/imagesrv/apps/peerinsights/images/vendors/logos/google_enterprise-mobility-management-suites.png"
        }
      ></ResultBox>
    </Box>
  );
};

export default ResultCard;
