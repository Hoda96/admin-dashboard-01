import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Header from "../../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";

function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
    console.log("selected", selected);
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title} ?`
      )
    )
      selected.event.remove();
  };

  // const handleEvent = (event) => {
  //   setCurrentEvents(event);
  // };

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* Calendar Sidebar */}
        <Box
          flex={"1 1 20%"}
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: "2px",
          }}
        >
          <Typography variant="h5" m={"1rem"}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event) => {
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>;
            })}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex={"1 1 100%"} ml={"1rem"}>
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(event) => setCurrentEvents(event)}
            initialEvents={[
              {
                id: "1325",
                title: "All-day event",
                date: "2023-10-25",
              },
              {
                id: "1785",
                title: "Yalda event",
                date: "2023-10-15",
              },
              {
                id: "2395",
                title: "BD event",
                date: "2023-11-02",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Calendar;
