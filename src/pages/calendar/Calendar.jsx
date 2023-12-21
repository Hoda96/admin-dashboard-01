import { Box } from "@mui/material";
import Header from "../../components/Header";
// import FullCalendar, { formatDate } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { useTheme } from "@emotion/react";
// import { tokens } from "../../theme";
// import { useState } from "react";

function Calendar() {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);
  //   const [currentEvents, setCurrentEvents] = useState([]);

  //   const handleDateClick = (selected) => {
  //     const title = prompt("Please enter a new title for your event");
  //   };

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Calendar;
