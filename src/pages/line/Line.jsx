import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

function Line() {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Line Chart" subtitle="Welcome toLine Chart" />
      </Box>
      <LineChart />
    </Box>
  );
}

export default Line;
