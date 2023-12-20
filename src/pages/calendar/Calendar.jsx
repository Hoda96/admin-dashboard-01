import { Box } from "@mui/material";
import Header from "../../components/Header";

function Calendar() {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Contacts" subtitle="Welcome to your Calendar" />
      </Box>
    </Box>
  );
}

export default Calendar;
