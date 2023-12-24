import { Box, Button, IconButton, Typography } from "@mui/material";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import {
  Download,
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";

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
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          padding={"20px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="h5" fontSize={"16px"}>
                Revenue Generated
              </Typography>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                fontSize={"24px"}
                sx={{ color: colors.greenAccent[500] }}
              >
                $59,325,478
              </Typography>
            </Box>
            <IconButton>
              <DownloadOutlined
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            </IconButton>
          </Box>
          <Box height={"250px"}>
            <LineChart isDashboard="true" />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          // display={"flex"}
          // justifyContent={"center"}
          // alignItems={"center"}
          overflow={"auto"}
          p={"1rem"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p={"1rem"}
          >
            <Typography
              variant="h5"
              fontWeight={"600"}
              color={colors.grey[100]}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p={"1rem"}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={"600"}
                  color={colors.greenAccent[500]}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>
                <Typography color={colors.grey[100]}>
                  {transaction.date}
                </Typography>
              </Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p={"6px 10px"}
                borderRadius={"4px"}
              >
                <Typography color={colors.grey[100]}>
                  {transaction.cost}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row #3 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"1rem"}
        >
          <Typography variant="h5" fontSize={"16px"}>
            Campaign
          </Typography>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"1.5rem"}
            mt={"2rem"}
          >
            <ProgressCircle progress="0.6" size="130" />

            <Box>
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                fontWeight={"600"}
                textAlign={"center"}
              >
                $48,352 revenue generated
              </Typography>
              <Typography variant="h5" fontSize={"14px"} textAlign={"center"}>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          gap={"1.5rem"}
          p={"1rem"}
        >
          <Typography variant="h5" fontSize={"16px"}>
            Sale Quantity
          </Typography>
          <Box height="250px" width={"350px"}>
            <BarChart isDashboard="true" />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          gap={"1.5rem"}
          p={"1rem"}
        >
          <Typography variant="h5" fontSize={"16px"}>
            Sale Quantity
          </Typography>
          <Box height="250px">
            <GeographyChart isDashboard="true" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
