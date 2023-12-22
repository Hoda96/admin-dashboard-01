import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
// import BarChart from "../../components/BarChart";
// import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import {
  Download,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              padding: "10px 20px",
              backgroundColor: colors.blueAccent[700],
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "bold",
              color: colors.grey[100],
            }}
          >
            <Download sx={{ mr: "10px" }} /> Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* Row #1 */}
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <StatBox
            title={"12,361"}
            subtitle={"Emails Sent"}
            icon={<Email sx={{ color: colors.greenAccent[500] }} />}
            progress={"0.75"}
            increase={"+14%"}
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <StatBox
            title={"12,431,225"}
            subtitle={" Sales Obtained"}
            icon={<PointOfSale sx={{ color: colors.greenAccent[500] }} />}
            progress={"0.45"}
            increase={"+21%"}
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <StatBox
            title={"32,441"}
            subtitle={"New Clients"}
            icon={<PersonAdd sx={{ color: colors.greenAccent[500] }} />}
            progress={"0.05"}
            increase={"+5%"}
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <StatBox
            title={"1,325,134"}
            subtitle={"Traffic Received"}
            icon={<Traffic sx={{ color: colors.greenAccent[500] }} />}
            progress={"0.65"}
            increase={"+43%"}
          />
        </Box>
        {/* Row #2 */}
        <Box
          gridColumn={"span 8"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        ></Box>
        <Box
          gridColumn={"span 4"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        ></Box>
        {/* Row #3 */}
        <Box
          gridColumn={"span 4"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        ></Box>
        <Box
          gridColumn={"span 4"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        ></Box>
        <Box
          gridColumn={"span 4"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        ></Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
