import { Box } from "@mui/material";
import Header from "../../components/Header";

function FAQ() {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Contacts" subtitle="Welcome to FAQs" />
      </Box>
    </Box>
  );
}

export default FAQ;
