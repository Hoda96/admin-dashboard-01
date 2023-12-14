import { Box, IconButton, InputBase } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  DarkModeOutlined,
  LightModeOutlined,
  PersonOutline,
  SettingsOutlined,
} from "@mui/icons-material";

function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* search box */}
      <Box
        display={"flex"}
        backgroundColor={colors.primary[400]}
        borderRadius={3}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display={"flex"} justifyContent={"space-between"} gap={1}>
        <IconButton type="button" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlined />
        </IconButton>
        <IconButton type="button">
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
