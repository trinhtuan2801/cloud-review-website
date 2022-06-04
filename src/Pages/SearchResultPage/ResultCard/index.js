import { Box } from "@mui/material";
import ResultBox from "./ResultBox";

const ResultCard = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <ResultBox
        title={"Google Cloud Platform"}
        description={"Dream, build, and transform with Google Cloud"}
        rating={4.5}
        numOfRate={500}
        image={
          "https://www.gartner.com/imagesrv/apps/peerinsights/images/vendors/logos/google_enterprise-mobility-management-suites.png"
        }
      ></ResultBox>
      <ResultBox
        title={"Amazon Web Services"}
        description={
          "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis."
        }
        rating={4.5}
        numOfRate={500}
        image={
          "https://www.gartner.com/imagesrv/apps/peerinsights/images/vendors/logos/amazon-web-services_public-cloud-iaas.png "
        }
      ></ResultBox>
      <ResultBox
        title={"Google Cloud Platform"}
        description={"Dream, build, and transform with Google Cloud"}
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
