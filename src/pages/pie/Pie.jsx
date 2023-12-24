import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

function Pie() {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Pie Chart" subtitle="Welcome to Pie Chart" />
      </Box>
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
}

export default Pie;
