import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

function Geography() {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Geographic Chart" subtitle="Welcome to Geo" />
      </Box>
      <Box height={"75vh"}>
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geography;
