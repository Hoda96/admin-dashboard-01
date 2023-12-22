import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width={"100%"} m={"0 30px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle={"italic"}
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}

StatBox.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  progress: PropTypes.node,
  increase: PropTypes.node,
};
export default StatBox;
