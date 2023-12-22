import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { useState } from "react";

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (isExpanded, event) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="FAQs" subtitle="Frequently Asked Questions Page" />
      </Box>
      <Accordion
        sx={{ mb: "0.5rem", borderRadius: "4px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet consectetur?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            error similique natus! Delectus ullam error quo earum architecto
            dolores fugit amet excepturi, commodi, assumenda est nulla
            necessitatibus blanditiis nemo dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ mb: "0.5rem", borderRadius: "4px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet consectetur?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            error similique natus! Delectus ullam error quo earum architecto
            dolores fugit amet excepturi, commodi, assumenda est nulla
            necessitatibus blanditiis nemo dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ mb: "0.5rem", borderRadius: "4px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet consectetur?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            error similique natus! Delectus ullam error quo earum architecto
            dolores fugit amet excepturi, commodi, assumenda est nulla
            necessitatibus blanditiis nemo dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ mb: "0.5rem", borderRadius: "4px" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet consectetur?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            error similique natus! Delectus ullam error quo earum architecto
            dolores fugit amet excepturi, commodi, assumenda est nulla
            necessitatibus blanditiis nemo dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ mb: "0.5rem", borderRadius: "4px" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet consectetur?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            error similique natus! Delectus ullam error quo earum architecto
            dolores fugit amet excepturi, commodi, assumenda est nulla
            necessitatibus blanditiis nemo dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQ;
