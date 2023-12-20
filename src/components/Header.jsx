import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { tokens } from "../theme";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ mb: "30px" }}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        fontWeight={"bold"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
